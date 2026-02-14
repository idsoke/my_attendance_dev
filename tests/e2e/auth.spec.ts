import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
    test('should display login page', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1')).toContainText('Monitoring App')
        await expect(page.locator('input[type="email"]')).toBeVisible()
        await expect(page.locator('input[type="password"]')).toBeVisible()
    })

    test('should show error with invalid credentials', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'invalid@example.com')
        await page.fill('input[type="password"]', 'wrongpassword')
        await page.click('button[type="submit"]')

        await expect(page.locator('text=Email atau password salah')).toBeVisible()
    })

    test('should login successfully with valid credentials', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        // Should redirect to dashboard
        await expect(page).toHaveURL('/dashboard')
        await expect(page.locator('text=Dashboard')).toBeVisible()
    })

    test('should logout successfully', async ({ page }) => {
        // Login first
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        // Wait for dashboard
        await expect(page).toHaveURL('/dashboard')

        // Logout
        await page.click('button:has-text("Logout")')

        // Should redirect to login
        await expect(page).toHaveURL('/login')
    })
})

test.describe('Dashboard Access', () => {
    test('should redirect to login when not authenticated', async ({ page }) => {
        await page.goto('/dashboard')
        await expect(page).toHaveURL(/\/login/)
    })

    test('should show dashboard for authenticated user', async ({ page }) => {
        // Login
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        // Check dashboard
        await expect(page).toHaveURL('/dashboard')
        await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible()
        await expect(page.locator('text=Total Activities')).toBeVisible()
    })
})

test.describe('Role-Based Access', () => {
    test('USER should not see Master Data link', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        await expect(page.locator('a:has-text("Master Data")')).not.toBeVisible()
    })

    test('ADMIN should see Master Data link', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'admin@example.com')
        await page.fill('input[type="password"]', 'admin123')
        await page.click('button[type="submit"]')

        await expect(page.locator('a:has-text("Master Data")')).toBeVisible()
    })

    test('ADMIN can access Master Data page', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'admin@example.com')
        await page.fill('input[type="password"]', 'admin123')
        await page.click('button[type="submit"]')

        await page.click('a:has-text("Master Data")')
        await expect(page).toHaveURL('/master')
        await expect(page.locator('h1:has-text("Master Data")')).toBeVisible()
    })
})

test.describe('Activities Management', () => {
    test('should display activities page', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        await page.click('a:has-text("Activities")')
        await expect(page).toHaveURL('/activities')
        await expect(page.locator('h1:has-text("Activities")')).toBeVisible()
    })

    test('should show add activity form', async ({ page }) => {
        await page.goto('/login')
        await page.fill('input[type="email"]', 'user@example.com')
        await page.fill('input[type="password"]', 'user123')
        await page.click('button[type="submit"]')

        await page.click('a:has-text("Activities")')
        await page.click('button:has-text("Add Activity")')

        await expect(page.locator('text=Add New Activity')).toBeVisible()
        await expect(page.locator('input[id="title"]')).toBeVisible()
    })
})
