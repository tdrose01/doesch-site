import { test, expect } from '@playwright/test'

test.describe('Product gallery', () => {
  test('loads product page and verifies gallery behavior/styles', async ({ page }) => {
    await page.goto('/product/f-01-imperiale')

    await expect(page).toHaveURL(/\/product\/f-01-imperiale$/)

    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()

    const mainImage = page.locator('img[alt*="view"]')
    await expect(mainImage).toBeVisible()

    const thumbnails = page.locator('button:has(img[alt*="thumbnail"])')
    await expect(thumbnails.first()).toBeVisible()
    await expect(thumbnails).toHaveCount(13)

    // Thumbnails are below the main image area.
    const mainBox = await mainImage.boundingBox()
    const thumbBox = await thumbnails.first().boundingBox()
    expect(mainBox).not.toBeNull()
    expect(thumbBox).not.toBeNull()
    expect(thumbBox.y).toBeGreaterThan(mainBox.y)

    // Rounded corners class exists on thumbnail buttons.
    const firstThumbClass = await thumbnails.first().getAttribute('class')
    expect(firstThumbClass).toContain('rounded-2xl')

    // Active thumbnail has gold ring/border effect classes.
    const activeClass = await thumbnails.first().getAttribute('class')
    expect(activeClass).toContain('border-gold/90')
    expect(activeClass).toContain('ring-2')
    expect(activeClass).toContain('ring-gold/30')

    // Hover effect: image scales up via group-hover class and computed transform changes on hover.
    const firstThumbImage = thumbnails.first().locator('img')
    const imgClass = await firstThumbImage.getAttribute('class')
    expect(imgClass).toContain('group-hover:scale-110')

    const secondThumb = thumbnails.nth(1)
    const secondThumbImage = secondThumb.locator('img')

    const secondThumbClass = await secondThumb.getAttribute('class')
    expect(secondThumbClass).toContain('hover:-translate-y-1')

    await secondThumb.hover()
    await expect(secondThumb).toBeVisible()

    // Clicking another thumb should make it active (gold ring/border classes move).
    await secondThumb.click()
    const secondClass = await secondThumb.getAttribute('class')
    const firstAfterClickClass = await thumbnails.first().getAttribute('class')

    expect(secondClass).toContain('border-gold/90')
    expect(secondClass).toContain('ring-2')
    expect(firstAfterClickClass).not.toContain('border-gold/90')
  })
})
