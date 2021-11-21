export default function HomePage() {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "arial",
      }}
    >
      <h1>Welcome to Next.js!</h1>
      <p>
        Forked from the official "Sanity + Next.js + Vercel example" by{" "}
        <a href="https://roboto.studio" style={{ color: "#FF20C9" }}>
          Roboto Studio
        </a>
      </p>
    </div>
  );
}
