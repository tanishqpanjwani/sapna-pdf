export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1>Sapna Trading Company</h1>
        <p>Select role</p>

        <a style={styles.btn} href="/purchaser">Purchaser</a>
        <a style={styles.btn} href="/unloader">Unloader</a>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3ead7",
    display: "grid",
    placeItems: "center",
    padding: 16
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#fffaf0",
    padding: 20,
    borderRadius: 16,
    textAlign: "center"
  },
  btn: {
    display: "block",
    marginTop: 12,
    padding: "14px",
    background: "#111827",
    color: "#fff",
    borderRadius: 12,
    textDecoration: "none",
    fontSize: 18
  }
};
