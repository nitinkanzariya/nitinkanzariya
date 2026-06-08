import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Nitin Kanzariya — Full Stack Developer & AI Platform Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "40px 60px",
            position: "relative",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(59,130,246,0.3)",
              background: "rgba(59,130,246,0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#3b82f6",
                display: "flex",
              }}
            />
            <span style={{ color: "#93c5fd", fontSize: "16px", fontWeight: 500 }}>
              Available for Work
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Nitin Kanzariya
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "28px",
              fontWeight: 500,
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
            }}
          >
            Full Stack Developer & AI Platform Engineer
          </p>

          {/* Tech stack pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            {["React", "Next.js", "Node.js", "Python", "LangGraph", "TypeScript"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#cbd5e1",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Domain */}
          <p
            style={{
              fontSize: "16px",
              color: "#64748b",
              margin: 0,
              marginTop: "12px",
            }}
          >
            nitinkanzariya.vercel.app
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
