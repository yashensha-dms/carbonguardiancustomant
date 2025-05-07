import React from "react";
import { generate } from "@ant-design/colors";

const colors = [
  { name: "Primary", base: "#01953F" },
  { name: "Graphite", base: "#3B3B3B" },
  { name: "Yellow", base: "#FEDA00" }
];
/**
 * @param {{}} props
 */
export const Colorpala = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div style={{ padding: 20 }}>
      {colors.map(({ name, base }) => {
        const palette = generate(base);

        return (
          <div key={name} style={{ marginBottom: 32 }}>
            <h3 style={{ marginBottom: 12 }}>{name} Palette</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 8,
                    boxSizing: "border-box",
                    color: "#000"
                  }}
                >
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 12,
                      textShadow: "0 0 2px rgba(0,0,0,0.4)"
                    }}
                  >
                    {color}
                  </div>
                  <button
                    onClick={() => copyToClipboard(color)}
                    style={{
                      marginTop: 6,
                      fontSize: 10,
                      padding: "2px 6px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      background: "#fff",
                      color: "#333"
                    }}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
