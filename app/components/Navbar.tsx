"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/equipe", label: "Equipe" },
  { href: process.env.NEXT_PUBLIC_STORE_URL ?? "#", label: "Loja" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled
          ? "rgba(12, 11, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(42, 37, 64, 0.8)"
          : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Paragonn"
            width={148}
            height={52}
            style={{ width: "auto", height: "40px" }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {NAV_LINKS.map((l) => {
            const isExternal = l.href.startsWith("http");
            return isExternal ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="nav-item"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="nav-item"
              >
                {l.label}
              </Link>
            );
          })}

          <a
            href="https://discord.gg/paragonn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "9px 22px", fontSize: 13, animation: "none" }}
          >
            <DiscordIcon />
            Discord
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--text)",
            display: "none",
          }}
          aria-label="Menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(13, 11, 19, 0.98)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--muted)",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/paragonn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: 20, justifyContent: "center", animation: "none" }}
          >
            <DiscordIcon />
            Entrar no Discord
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-item:hover { color: #fff !important; }
      `}</style>
    </header>
  );
}

function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.07.11 18.083.12 18.09a19.904 19.904 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
