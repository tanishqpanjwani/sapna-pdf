import { generatePDF } from "../_lib/pdf";

export async function POST(req: Request) {
  const b = await req.json();

  const html = `
    <h2>Sapna Trading Company</h2>
    <h4>Unloader Report</h4>
    <pre>${JSON.stringify(b, null, 2)}</pre>
  `;

  const pdf = await generatePDF(html);

  return new Response(pdf, {
    headers: { "Content-Type": "application/pdf" }
  });
}
