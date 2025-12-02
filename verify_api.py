from playwright.sync_api import sync_playwright

def verify_api_examples():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to docs/api.html...")
        page.goto("file:///app/docs/api.html")

        # We need to verify that code examples exist for the other endpoints now.
        # We will take a screenshot of the whole page to confirm.
        # But to be specific, let's verify existence of "GET /api/light" code block.

        # There are multiple "Code Examples" headers now.
        # We can just take a full page screenshot which is good enough to verify layout.

        page.screenshot(path="verification_api_full.png", full_page=True)
        print("Captured verification_api_full.png")

        browser.close()

if __name__ == "__main__":
    verify_api_examples()
