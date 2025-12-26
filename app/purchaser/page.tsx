"use client";
import { useState } from "react";

export default function Purchaser() {
  const [data, setData] = useState<any>({ hammali: "0" });

  const set = (k: string, v: string) => setData((p: any) => ({ ...p, [k]: v }));

  async function download(type: "office" | "unloader") {
    const res = await fetch(`/api/purchaser/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  return (
    <main style={S.page}>
      <div style={S.card}>
        <h2>Purchaser Form</h2>

        {fields.map(f => (
          <input
            key={f}
            placeholder={f}
            style={S.input}
            onChange={e => set(f, e.target.value)}
          />
        ))}

        <button style={S.btn} onClick={() => download("office")}>Download Office PDF</button>
        <button style={S.btnAlt} onClick={() => download("unloader")}>Download Unloader PDF</button>
      </div>
    </main>
  );
}

const fields = [
  "purchaserName", "date (DD/MM/YY)", "village", "kisan",
  "variety", "bags", "bharti", "rate", "vehicle",
  "bank", "hammali", "remarks"
];

const S = {
  page: { minHeight: "100vh", background: "#f3ead7", display: "grid", placeItems: "center" },
  card: { background: "#fffaf0", padding: 20, borderRadius: 16, maxWidth: 520 },
  input: { width: "100%", padding: 12, marginTop: 8, borderRadius: 10 },
  btn: { marginTop: 14, width: "100%", padding: 14, background: "#111827", color: "#fff", borderRadius: 12 },
  btnAlt: { marginTop: 10, width: "100%", padding: 14, background: "#065f46", color: "#fff", borderRadius: 12 }
};
