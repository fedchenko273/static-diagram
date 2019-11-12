import React from "react";

const styles = {
  text: {
    textAnchor: "middle"
  }
};

function Shape({ type, coords, size, view, label }) {
  switch (type) {
    case "rect":
      return (
        <g>
          <rect
            x={coords.x}
            y={coords.y}
            width={size.width}
            height={size.height}
            fill={view.fill}
            stroke={view.stroke}
          />
          <text
            style={styles.text}
            x={coords.x + size.width / 2}
            y={coords.y + size.height / 2}
          >
            {label}
          </text>
        </g>
      );

    case "circle":
      return (
        <g>
          <circle
            cx={coords.x}
            cy={coords.y}
            r={size.raduis}
            fill={view.fill}
            stroke={view.stroke}
          />
          <text
            style={{ ...styles.text, alignmentBaseline: "middle" }}
            x={coords.x}
            y={coords.y}
          >
            {label}
          </text>
        </g>
      );

    default:
      return null;
  }
}

export default Shape;
