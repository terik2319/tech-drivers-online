import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        background: "#0b0d12",
        color: "#f2f4f8",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0, letterSpacing: "0.05em" }}>
        TECH DRIVERS ONLINE
      </h1>
      <p style={{ color: "#9aa4b2", maxWidth: 480, margin: 0 }}>
        Simulador FTCSim en el navegador. Build WebGL generado con Unity 6.
      </p>
      <Link
        href="/play"
        style={{
          padding: "0.9rem 2.4rem",
          background: "#f2c200",
          color: "#15181f",
          fontWeight: 700,
          fontSize: "1.1rem",
          borderRadius: "999px",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        PLAY
      </Link>
    </main>
  );
}
