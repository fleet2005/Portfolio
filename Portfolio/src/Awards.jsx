import React from "react";

function Awards() {
  return (
    <div
      style={{
        backgroundColor: "cyan",
        padding: "0.7rem", // Further reduced padding by 30%
        borderRadius: "3px", // Reduced border radius for better proportions
        animation: "pulse 3s ease-in-out infinite",
        marginTop: "17vw",
        marginBottom : "-2vw",
      }}
    >
      {/* Inline style for keyframes animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(0.92); }
            50% { transform: scale(0.95); }
            100% { transform: scale(0.92); }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: "black",
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          🏆 Achievements & Awards 🥇
        </h1>

        <div style={{ display: "flex", justifyContent: "space-around", gap: "2rem" }}>
          {/* Hackathons */}
          <div style={{ flex: 1 }}>
            <h2 style={{ borderBottom: "2px solid limegreen", paddingBottom: "0.5rem" }}>
              Hackathons
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: "0", fontSize: "1.2rem" }}>
              <li>🥈 <strong>MTI-Hub Hackathon 2024</strong> – 2nd Prize</li>
              <br />
              <li>🥈 <strong>Ahouba-2.0 Hackathon</strong> – 2nd Prize</li>
              <br />
              <li>
                🏆 <strong>SIH'24 (Smart India Hackathon)</strong> – Grand Finalist (Top 30 out of
                1332)
              </li>
              <br />
              <li>🥉 <strong>GDG Hackathon</strong> – 3rd Prize</li>
              <li>
                <em style={{ paddingLeft: "1rem" }}>
                  *Team Lead in all hackathons attended
                </em>
              </li>
            </ul>
          </div>

          {/* Academic Excellence */}
          <div style={{ flex: 1 }}>
            <h2 style={{ borderBottom: "2px solid limegreen", paddingBottom: "0.5rem" }}>
              Academics
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: "0", fontSize: "1.2rem" }}>
              <li>
                🏅 <strong>National Science Olympiad (SOF)</strong> – Tamil Nadu Zonal Rank 23
              </li>
              <br />
              <li>
                🎖 <strong>Software Testing</strong> – National Topper (Top 5 percentile)
              </li>
              <br />
              <li>
                📊 <strong>Introduction to Data Science</strong> – Certified by IIIT Bangalore, IBM &
                Coursera
              </li>
            </ul>
          </div>

          {/* Debate & Public Speaking */}
          <div style={{ flex: 1 }}>
            <h2 style={{ borderBottom: "2px solid limegreen", paddingBottom: "0.5rem" }}>
              Public Speaking
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: "0", fontSize: "1.2rem" }}>
              <li>
                🏆 <strong>11x MUN Winner</strong> (Model United Nations)
              </li>
              <br />
              <li>
                🎙 <strong>1x Vice Chairperson</strong> in MUN conference (PEMSEA)
              </li>
              <br />
              <li>
                🎙 <strong>1x Director</strong> in MUN conference (UNEA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
