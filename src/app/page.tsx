import {
  neutralLight,
  neutralDark,
  accentColor,
  fontFamily,
  heroFontSize,
} from "./styles";

export default function Home() {
  return (
    <div style={{ margin: 0 }}>
      {/* Hero Section */}
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
        <h1 style={{ fontSize: heroFontSize, fontWeight: 900, maxWidth: "900px", margin: 0 }}>
          Design
        </h1>
        <h1 style={{ fontSize: heroFontSize, fontWeight: 900, maxWidth: "900px", margin: 0 }}>
          Consulting
        </h1>
        <h1 style={{ fontSize: heroFontSize, fontWeight: 900, maxWidth: "900px", margin: 0 }}>
          Club
        </h1>
        <h1 style={{ fontSize: heroFontSize, fontWeight: 900, maxWidth: "900px", margin: 0 }}>
          at Georgia Tech
        </h1>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: neutralLight,
          color: accentColor,
          fontFamily,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>About</h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "700px",
            textAlign: "center",
            color: neutralDark,
          }}
        >
          The Design Consulting Club at Georgia Tech is a student-run
          organization that delivers pro-bono design consulting to startups and
          companies. We work across industrial design, graphic design, and UX.
          Projects are run by dedicated student teams in both industrial and
          software design.
        </p>
      </section>

      {/* Our Mission Section */}
      <section
        style={{
          backgroundColor: neutralDark,
          color: neutralLight,
          fontFamily,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Our Mission</h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          We exist to bridge the gap between design education and real-world
          impact. By partnering with startups and established companies alike, we
          give Georgia Tech students hands-on experience solving meaningful design
          challenges — while delivering professional-quality work to organizations
          that need it most.
        </p>
      </section>

      {/* Values & Methodology Section */}
      <section
        style={{
          backgroundColor: neutralLight,
          color: neutralDark,
          fontFamily,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: accentColor }}>
              Our Values
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              We believe great design starts with empathy, thrives on
              collaboration, and demands rigor. Every project we take on is
              grounded in user research, honest critique, and a commitment to
              craft. We value diverse perspectives — our best work comes from
              teams that bring together industrial designers, software engineers,
              and visual storytellers.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: accentColor }}>
              Our Methodology
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              Each engagement follows a structured design sprint: discovery,
              ideation, prototyping, and delivery. We begin with stakeholder
              interviews and competitive analysis, move through rapid concept
              generation, and converge on solutions validated by user testing.
              Our teams operate on weekly check-ins with clients to ensure
              alignment from kickoff to final handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section
        style={{
          backgroundColor: accentColor,
          color: neutralLight,
          fontFamily,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          Partner with GT DCC
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "700px",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Whether you are a startup looking for product design support, a company
          interested in sending a speaker to share industry insights, or an
          organization exploring sponsorship opportunities — we would love to
          hear from you. Our partnerships are built on mutual value: your team
          gets dedicated design talent, and our members gain real-world
          experience that shapes their careers.
        </p>
        <a
          href="#contact"
          style={{
            marginTop: "1rem",
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            fontFamily,
            fontWeight: 700,
            border: `2px solid ${neutralLight}`,
            borderRadius: "4px",
            color: neutralLight,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </a>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          backgroundColor: accentColor,
          color: neutralLight,
          fontFamily,
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Contact</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              fontFamily,
              border: "none",
              borderRadius: "4px",
              backgroundColor: neutralLight,
              color: neutralDark,
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              fontFamily,
              border: "none",
              borderRadius: "4px",
              backgroundColor: neutralLight,
              color: neutralDark,
            }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              fontFamily,
              border: "none",
              borderRadius: "4px",
              backgroundColor: neutralLight,
              color: neutralDark,
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              fontFamily,
              fontWeight: 700,
              border: `2px solid ${neutralLight}`,
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: neutralLight,
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
