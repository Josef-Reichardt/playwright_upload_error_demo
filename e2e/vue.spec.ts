import { expect, test } from '@playwright/test'
import path from 'path'
import { tmpdir } from 'os'
import fs from 'fs'


// See here how to get started:
// https://playwright.dev/docs/intro
test('demonstrate upload issue', async ({ page }) => {
  await page.goto('/')

  const filePath = path.resolve(process.cwd(), 'e2e', 'test-pdf.pdf')
  for (let i = 0; i < 30; i++) {
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.getByTestId('upload').click()
    const fileChooser = await fileChooserPromise
    const tmpDir = path.resolve(tmpdir(), `playwright-test-upload-${new Date().getTime()}`)
    fs.mkdirSync(tmpDir)
    const tmpFile = path.resolve(tmpDir, `test-${i}.pdf`)
    fs.copyFileSync(filePath, tmpFile)
    await fileChooser.setFiles(tmpFile)

    // remove file in three seconds (async - until then the upload should be finished)
    setTimeout(() => {
      fs.rmSync(tmpFile)
      fs.rmdirSync(tmpDir)
    }, 3000)

    await expect(page.getByTestId('fileCount')).toHaveText(`${i + 1}`)
  }

  await page.pause();
  await page.getByTestId('submit').click()
  await page.pause();
  await expect(page.getByTestId('fileCount')).toHaveText('0', { timeout: 60000 })
})
