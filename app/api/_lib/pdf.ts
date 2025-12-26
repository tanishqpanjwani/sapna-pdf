import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function generatePDF(html: string) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true
  });

  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();

  return pdf;
}
