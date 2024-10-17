import { chromium } from "playwright"
;(async () => {
  const browser = await chromium.launch({
    headless: false,
  })
  const context = await browser.newContext()
  const page = await context.newPage()
  const args = {
    from: {
      gengo: "令和",
      year: 4,
      month: 6,
      day: 24,
    },
  }
  const filter = {
    "filter%5BjudgeGengoFrom%5D": args.from.gengo,
    "filter%5BjudgeYearFrom%5D": args.from.year,
    "filter%5BjudgeMonthFrom%5D": args.from.month,
    "filter%5BjudgeDayFrom%5D": args.from.day,
  }
  await page.goto(
    `https://www.courts.go.jp/app/hanrei_jp/list2?${Object.entries(filter)
      .map(([k, v]) => `${k}=${v}`)
      .join("&")}`
  )
  const content = await page.evaluate(() => {
    const rows = document.querySelector(
      "#main-contents > div.block-sub-page-contents-area.module-single-column > div > div.block-search-area > div.table_btn_wrap > div.module-sub-page-parts-table.module-search-page-table-parts-result > table > tbody > tr:nth-child(1)"
    ) as HTMLTableRowElement
    return rows
  })
  console.log(content)

  await page.close()
  await browser.close()
})()
