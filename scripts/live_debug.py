"""Minimal production smoke probe for the deployed Pages build."""

from playwright.sync_api import sync_playwright


URL = "https://irgendjemandkeinkorper.github.io/realms-and-ruin/"


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(f"pageerror: {error}"))
    page.on(
        "console",
        lambda message: errors.append(f"console {message.type}: {message.text}")
        if message.type in {"error", "warning"}
        else None,
    )
    response = page.goto(URL, wait_until="domcontentloaded", timeout=30000)
    page.wait_for_timeout(5000)
    print(f"status={response.status if response else 'none'}")
    print(f"title={page.title()}")
    main_loaded = page.evaluate("typeof window.showGallery === 'function'")
    print(f"main_loaded={main_loaded}")
    print(f"title_screen={page.locator('#scr-title.active').count()}")
    page.get_by_role("button", name="How to Play", exact=True).click()
    rules_open = page.locator("#overlay[style*='block']").count()
    print(f"rules_open={rules_open}")
    page.keyboard.press("Escape")
    page.get_by_role("button", name="How to Play", exact=True).click()
    page.keyboard.press("Escape")
    page.get_by_role("button", name="Begin the Tale (this screen)", exact=True).click()
    print(f"hook_screen={page.locator('#scr-hook.active').count()}")
    page.evaluate("window.showGallery()")
    print(f"gallery_tiles={page.locator('.gcat-archetypes .gtile').count()}")
    for error in errors:
        print(error)
    browser.close()
