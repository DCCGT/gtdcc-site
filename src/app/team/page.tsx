import {
  neutralLight,
  neutralDark,
  fontFamily,
} from "../styles";

const teamMembers = [
  { title: "President", major: "Computer Science - '28" },
  { title: "Internal VP", major: "Computer Science - '28" },
  { title: "External VP", major: "Computer Science - '28" },
  { title: "Marketing Director", major: "Computer Science - '28" },
  { title: "Company Relations Director", major: "Computer Science - '28" },
  { title: "Treasurer", major: "Computer Science - '28" },
  { title: "Industrial Design Team Lead", major: "Computer Science - '28" },
  { title: "Software Design Team Lead", major: "Computer Science - '28" },
];

export default function Team() {
  return (
    <div style={{ margin: 0 }}>
      <section
        style={{
          backgroundColor: neutralDark,
          color: neutralLight,
          fontFamily,
          padding: "6rem 2rem 4rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Team</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "180px",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "4px",
                  marginBottom: "0.75rem",
                }}
              />
              <span style={{ fontWeight: 700, fontSize: "1rem" }}>
                {member.title}
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#999",
                  marginTop: "0.25rem",
                }}
              >
                {member.major}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
