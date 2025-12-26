import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function generatePDF(html: string): Promise<Uint8Array> {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBytes = await page.pdf({
      format: "A4",
      printBackground: true
    });

    // pdfBytes is already a Uint8Array
    return pdfBytes;
  } finally {
    await browser.close();
  }
}
