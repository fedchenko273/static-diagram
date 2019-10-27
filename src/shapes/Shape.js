import React from "react";

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
          <text x={coords.x + size.width / 2} y={coords.y + size.height / 2}>
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
          <text />
        </g>
      );

    default:
      return null;
  }
}

export default Shape;
