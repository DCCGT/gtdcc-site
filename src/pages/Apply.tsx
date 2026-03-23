import {
  neutralLight,
  accentColor,
  fontFamily,
  heroFontSize,
} from "../styles";

export default function Apply() {
  return (
    <div style={{ margin: 0 }}>
      <section
        style={{
          backgroundColor: accentColor,
          color: neutralLight,
          fontFamily,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "left",
        }}
      >
        <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>
          Applications
        </h1>
        <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>
          Now Open
        </h1>
        <a
          href="#"
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            fontFamily,
            fontWeight: 700,
            border: `2px solid ${neutralLight}`,
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: neutralLight,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}
