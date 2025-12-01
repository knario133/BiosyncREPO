from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page
        page.goto("http://localhost:8080/index.html")
        page.screenshot(path="verification/home_page.png", full_page=True)
        print("Home page screenshot taken.")

        # 2. Verify API Page
        page.goto("http://localhost:8080/docs/api.html")

        # Click on a tab to verify JS works (e.g. Python is default, click JS)
        page.click("button[data-tab='js']")

        page.screenshot(path="verification/api_page.png", full_page=True)
        print("API page screenshot taken.")

        # 3. Verify Automation Page
        page.goto("http://localhost:8080/docs/automation.html")
        page.screenshot(path="verification/automation_page.png", full_page=True)
        print("Automation page screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_site()
