import {
  neutralLight,
  neutralDark,
  accentColor,
  fontFamily,
  heroFontSize,
} from "../styles";

/* ── Inline SVG Icons ── */

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const MicIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17a1 1 0 0 1-1 1H6l-4-4 2-2 4 4h2a1 1 0 0 1 1 1z" />
    <path d="M13 17a1 1 0 0 0 1 1h4l4-4-2-2-4 4h-2a1 1 0 0 0-1 1z" />
    <path d="M6 7l-2 2 4 4" />
    <path d="M18 7l2 2-4 4" />
    <path d="M12 3v10" />
  </svg>
);

/* ── Shared Styles ── */

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "0.75rem",
};

const sectionDivider: React.CSSProperties = {
  width: "100%",
  height: "1px",
  backgroundColor: "#ddd",
  margin: 0,
  border: "none",
};

export default function Home() {
  return (
    <div style={{ margin: 0 }}>
      {/* ── Hero ── */}
      <section
        className="hero"
        style={{
          backgroundColor: accentColor,
          color: neutralLight,
          fontFamily,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100vh",
          padding: "4rem 6rem",
          gap: "4rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>Design</h1>
          <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>Consulting</h1>
          <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>Club</h1>
          <h1 className="hero-title" style={{ fontSize: heroFontSize, fontWeight: 900, margin: 0 }}>at Georgia Tech</h1>
        </div>
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80"
          alt="Design workspace"
          style={{
            width: "400px",
            height: "500px",
            objectFit: "cover",
            borderRadius: "12px",
            flexShrink: 0,
          }}
        />
      </section>

      {/* ── About ── */}
      <section
        className="about"
        style={{
          backgroundColor: neutralLight,
          color: neutralDark,
          fontFamily,
          padding: "6rem 6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <div style={{ flex: 1, maxWidth: "550px", borderLeft: `4px solid ${accentColor}`, paddingLeft: "2rem" }}>
          <h2 style={{ fontSize: "2rem", marginTop: 0, marginBottom: "1rem", color: accentColor }}>
            About
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: 1.5,
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            We exist to bridge the gap between design education and real-world impact.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#555" }}>
            The Design Consulting Club at Georgia Tech is a student-run organization
            that delivers pro-bono design consulting to startups and companies. We work
            across industrial design, graphic design, and UX. Projects are run by
            dedicated student teams — partnering with startups and established companies
            alike to give Georgia Tech students hands-on experience solving meaningful
            design challenges.
          </p>
        </div>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
          alt="Team collaboration"
          style={{
            width: "380px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "12px",
            flexShrink: 0,
          }}
        />
      </section>

      {/* ── Values ── */}
      <section
        className="section"
        style={{
          backgroundColor: neutralLight,
          color: neutralDark,
          fontFamily,
          padding: "6rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginTop: 0, marginBottom: "2.5rem", color: accentColor }}>
          Our Values
        </h2>
        <div
          className="values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <div style={cardStyle}>
            <HeartIcon />
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Empathy</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              Great design starts with understanding people. We ground every project in
              user research and genuine curiosity about the problems we solve.
            </p>
          </div>
          <div style={cardStyle}>
            <PeopleIcon />
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Collaboration</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              Our best work comes from diverse teams — industrial designers, software
              engineers, and visual storytellers working side by side.
            </p>
          </div>
          <div style={cardStyle}>
            <TargetIcon />
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Rigor</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              We hold ourselves to professional standards. Honest critique and a
              commitment to craft drive every decision we make.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <h2
          style={{
            fontSize: "2rem",
            marginTop: "4rem",
            marginBottom: "2.5rem",
            color: accentColor,
          }}
        >
          Our Methodology
        </h2>
        <div
          className="methodology-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {[
            { step: "01", title: "Discovery", desc: "Stakeholder interviews & competitive analysis" },
            { step: "02", title: "Ideation", desc: "Rapid concept generation & exploration" },
            { step: "03", title: "Prototyping", desc: "User-tested solutions & iteration" },
            { step: "04", title: "Delivery", desc: "Final handoff with weekly client alignment" },
          ].map((item) => (
            <div key={item.step} style={{ textAlign: "center" }}>
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: accentColor,
                  opacity: 0.3,
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {item.step}
              </span>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5, color: "#555" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr style={sectionDivider} />

      {/* ── Partner ── */}
      <section
        className="section"
        style={{
          backgroundColor: neutralLight,
          color: neutralDark,
          fontFamily,
          padding: "6rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: accentColor,
            borderRadius: "2px",
            marginBottom: "1.5rem",
          }}
        />
        <h2 style={{ fontSize: "2rem", marginTop: 0, marginBottom: "1rem", color: accentColor }}>
          Partner with GT DCC
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            textAlign: "center",
            color: "#555",
            marginBottom: "2.5rem",
          }}
        >
          Our partnerships are built on mutual value — your team gets dedicated design
          talent, and our members gain real-world experience.
        </p>
        <div
          className="partner-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <div style={cardStyle}>
            <RocketIcon />
            <h3 style={{ margin: 0, fontSize: "1.15rem" }}>Startups</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              Need product design support? We pair dedicated student teams with early-stage
              companies for semester-long engagements.
            </p>
          </div>
          <div style={cardStyle}>
            <MicIcon />
            <h3 style={{ margin: 0, fontSize: "1.15rem" }}>Speakers</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              Share your industry insights with the next generation of designers and
              builders at Georgia Tech.
            </p>
          </div>
          <div style={cardStyle}>
            <HandshakeIcon />
            <h3 style={{ margin: 0, fontSize: "1.15rem" }}>Sponsorships</h3>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
              Support our mission and connect your brand with top design talent on
              campus.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          style={{
            marginTop: "2.5rem",
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            fontFamily,
            fontWeight: 700,
            border: `2px solid ${accentColor}`,
            borderRadius: "4px",
            color: accentColor,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </a>
      </section>

      {/* ── Contact ── */}
      <section
        className="section"
        id="contact"
        style={{
          backgroundColor: neutralDark,
          color: neutralLight,
          fontFamily,
          padding: "6rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginTop: 0, marginBottom: "2rem" }}>Contact</h2>
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
              backgroundColor: "#2a2a2a",
              color: neutralLight,
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
              backgroundColor: "#2a2a2a",
              color: neutralLight,
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
              backgroundColor: "#2a2a2a",
              color: neutralLight,
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
              border: `2px solid ${accentColor}`,
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: accentColor,
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
