"use client";

import Link from "next/link";
import { neutralLight, neutralDark, fontFamily } from "./styles";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: neutralDark,
        color: neutralLight,
        fontFamily,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 2rem",
      }}
    >
      <Link
        href="/"
        style={{
          color: neutralLight,
          textDecoration: "none",
          fontWeight: 900,
          fontSize: "1.1rem",
        }}
      >
        Design Consulting Club
      </Link>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link
          href="/#contact"
          style={{
            color: neutralLight,
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Contact
        </Link>
        <Link
          href="/team"
          style={{
            color: neutralLight,
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Team
        </Link>
        <Link
          href="/apply"
          style={{
            color: neutralLight,
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Apply
        </Link>
      </div>
    </nav>
  );
}
