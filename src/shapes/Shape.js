import React from "react";
import PropTypes from "prop-types";
import { lightBlue, lightGreen, lightRed } from "../constants";

const styles = {
  text: {
    textAnchor: "middle",
    alignmentBaseline: "middle"
  },
  active: {
    fill: lightBlue
  },
  error: {
    fill: lightRed
  },
  success: {
    fill: lightGreen
  }
};

function Shape({ type, coords, size, view, label, state }) {
  const stateStyle = state ? styles[state] : {};

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
            style={stateStyle}
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
            style={stateStyle}
          />
          <text style={styles.text} x={coords.x} y={coords.y}>
            {label}
          </text>
        </g>
      );

    default:
      return null;
  }
}

export default Shape;

Shape.propTypes = {
  state: PropTypes.oneOf(["active", "error", "success", "failed"])
};
