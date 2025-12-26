import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function generatePDF(html: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfUint8 = await page.pdf({
      format: "A4",
      printBackground: true
    });

    // Convert Uint8Array -> Buffer (fixes the Response type error)
    return Buffer.from(pdfUint8);
  } finally {
    await browser.close();
  }
}
