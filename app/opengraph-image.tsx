import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "KatyaDesign — Alessia Lescano, Desarrolladora Frontend"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0f1419",
          fontFamily: "monospace",
        }}
      >
        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #4be1ff, #a082ff, #4be1ff)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 32,
            color: "#4be1ff",
            marginBottom: 24,
            fontStyle: "italic",
            textShadow: "0 0 20px rgba(75, 225, 255, 0.3)",
          }}
        >
          KatyaDesign
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Alessia Lescano
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            color: "#d291ff",
            marginBottom: 40,
            display: "flex",
            gap: 8,
          }}
        >
          <span style={{ color: "#ffffff80" }}>{">"}</span>
          <span>Desarrolladora Frontend</span>
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "TypeScript", "SCSS"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                border: "1px solid #ffffff40",
                borderRadius: "20px",
                fontSize: 18,
                color: "#ffffff80",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 20,
            color: "#ffffff40",
          }}
        >
          katyadesign.com.ar
        </div>
      </div>
    ),
    { ...size }
  )
}
