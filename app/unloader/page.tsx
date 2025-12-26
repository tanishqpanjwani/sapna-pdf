"use client";
import { useState } from "react";

export default function Unloader() {
  const [data, setData] = useState<any>({});

  const set = (k: string, v: string) => setData((p: any) => ({ ...p, [k]: v }));

  async function download() {
    const res = await fetch(`/api/unloader`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const blob = await res.blob();
    window.open(URL.createObjectURL(blob));
  }

  return (
    <main style={S.page}>
      <div style={S.card}>
        <h2>Unloader Form</h2>

        {fields.map(f => (
          <input
            key={f}
            placeholder={f}
            style={S.input}
            onChange={e => set(f, e.target.value)}
          />
        ))}

        <button style={S.btn} onClick={download}>Download PDF</button>
      </div>
    </main>
  );
}

const fields = [
  "unloaderName", "date (DD/MM/YY)", "village", "kisan",
  "variety", "bags", "bharti", "vehicle", "kaataWeightKg", "remarks"
];

const S = {
  page: { minHeight: "100vh", background: "#f3ead7", display: "grid", placeItems: "center" },
  card: { background: "#fffaf0", padding: 20, borderRadius: 16, maxWidth: 520 },
  input: { width: "100%", padding: 12, marginTop: 8, borderRadius: 10 },
  btn: { marginTop: 14, width: "100%", padding: 14, background: "#111827", color: "#fff", borderRadius: 12 }
};
