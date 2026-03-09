#!/usr/bin/env python3
"""
Download all reviews and images from a share.google (or any) URL.
Uses Selenium to handle redirects and JavaScript-rendered content.
"""

import json
import os
import re
import time
from pathlib import Path
from typing import List, Optional
from urllib.parse import urljoin, urlparse

import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# Try optional webdriver-manager for automatic chromedriver
try:
    from webdriver_manager.chrome import ChromeDriverManager
    USE_WEBDRIVER_MANAGER = True
except ImportError:
    USE_WEBDRIVER_MANAGER = False

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "downloads"
IMAGES_DIR = OUTPUT_DIR / "images"
REVIEWS_FILE = OUTPUT_DIR / "reviews.json"
URL = "https://share.google/qnaEZ7ZUbKUhYsNs3"

# Common selectors for review text (Google Maps, generic cards, etc.)
REVIEW_SELECTORS = [
    "div[data-review-id]",
    "span[data-expandable-section]",
    ".review-snippet",
    ".section-review-text",
    "[data-attrid='review']",
    "div[jscontroller][data-review-id]",
    ".MyEned",  # Google Maps review text class
    ".wiI7pd",  # Google Maps review snippet
    "div.review",
    "[role='listitem'] span",
    ".jftiEf",  # Google Maps review container
]
# Fallback: any block that looks like a review (min length, no script)
MIN_REVIEW_LENGTH = 20


def get_driver(headless: bool = True):
    """Create and return a Chrome WebDriver."""
    options = Options()
    if headless:
        options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    options.add_argument(
        "user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )

    if USE_WEBDRIVER_MANAGER:
        service = Service(ChromeDriverManager().install())
        return webdriver.Chrome(service=service, options=options)
    return webdriver.Chrome(options=options)


def scroll_page(driver, pause: float = 1.0, max_scrolls: int = 15):
    """Scroll down to trigger lazy-loaded content."""
    last_height = driver.execute_script("return document.body.scrollHeight")
    scrolls = 0
    while scrolls < max_scrolls:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(pause)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height
        scrolls += 1


def extract_reviews(driver) -> List[dict]:
    """Extract review-like text from the page."""
    reviews = []
    seen = set()

    def add_text(text: str, author: str = ""):
        text = (text or "").strip()
        if len(text) < MIN_REVIEW_LENGTH or text in seen:
            return
        seen.add(text)
        reviews.append({"text": text, "author": author or None})

    # Try known review selectors
    for selector in REVIEW_SELECTORS:
        try:
            for el in driver.find_elements(By.CSS_SELECTOR, selector):
                try:
                    text = el.text.strip()
                    if len(text) >= MIN_REVIEW_LENGTH and text not in seen:
                        # Try to get author from nearby element
                        author = ""
                        try:
                            parent = el.find_element(By.XPATH, "./..")
                            by_el = parent.find_elements(
                                By.CSS_SELECTOR, "[class*='author'], [class*='name'], .d4r55"
                            )
                            if by_el:
                                author = by_el[0].text.strip()
                        except Exception:
                            pass
                        add_text(text, author)
                except Exception:
                    continue
        except Exception:
            continue

    # Fallback: collect substantial paragraph/div text that might be reviews
    if not reviews:
        for tag in ("p", "div", "span"):
            for el in driver.find_elements(By.TAG_NAME, tag):
                try:
                    text = el.text.strip()
                    if MIN_REVIEW_LENGTH <= len(text) <= 2000 and text not in seen:
                        # Heuristic: looks like prose (has space, not all caps/code)
                        if " " in text and not re.match(r"^[\W\d_]+$", text):
                            add_text(text)
                except Exception:
                    continue

    return reviews


def extract_image_urls(driver, base_url: str) -> List[str]:
    """Collect all image URLs from the page."""
    urls = []
    seen = set()
    for img in driver.find_elements(By.TAG_NAME, "img"):
        try:
            src = img.get_attribute("src") or img.get_attribute("data-src")
            if not src or src.startswith("data:") or src in seen:
                continue
            full = urljoin(base_url, src)
            if full not in seen:
                seen.add(full)
                seen.add(src)
                urls.append(full)
        except Exception:
            continue
    return urls


def download_image(url: str, folder: Path, index: int) -> Optional[str]:
    """Download image from URL; return filename if successful."""
    try:
        r = requests.get(url, timeout=15, stream=True)
        r.raise_for_status()
        path = urlparse(url).path
        ext = os.path.splitext(path)[1] or ".jpg"
        if ext.lower() not in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"):
            ext = ".jpg"
        name = f"image_{index:04d}{ext}"
        filepath = folder / name
        with open(filepath, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        return name
    except Exception as e:
        print(f"  Skip image {index}: {e}")
        return None


def main():
    print("Creating output dirs:", OUTPUT_DIR, IMAGES_DIR)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    print("Starting browser...")
    driver = get_driver(headless=True)
    try:
        print("Opening URL (will follow redirect)...")
        driver.get(URL)
        WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
        time.sleep(3)
        final_url = driver.current_url
        print("Final URL after redirect:", final_url)

        print("Scrolling to load dynamic content...")
        scroll_page(driver, pause=1.5)

        print("Extracting reviews...")
        reviews = extract_reviews(driver)
        print(f"Found {len(reviews)} review(s).")
        with open(REVIEWS_FILE, "w", encoding="utf-8") as f:
            json.dump({"url": final_url, "reviews": reviews}, f, indent=2, ensure_ascii=False)
        print("Saved:", REVIEWS_FILE)

        print("Extracting image URLs...")
        image_urls = extract_image_urls(driver, final_url)
        print(f"Found {len(image_urls)} image(s).")

        for i, url in enumerate(image_urls):
            download_image(url, IMAGES_DIR, i)
        print("Images saved to:", IMAGES_DIR)
    finally:
        driver.quit()
    print("Done.")


if __name__ == "__main__":
    main()
