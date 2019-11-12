import React from "react";
import PropTypes from "prop-types";
import { darkGreyColor, strokeWidth } from "../constants";

function HorizontalBrokenLine({ start, end, breakpoint = {} }) {
  if (breakpoint.position === "center") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${start.x + (end.x - start.x) / 2} ${
          start.y
        } L ${start.x + (end.x - start.x) / 2} ${end.y} L ${end.x} ${end.y} `}
        stroke={darkGreyColor}
        fill="none"
        strokeWidth={strokeWidth}
      />
    );
  }

  if (breakpoint.position === "start") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${end.x} ${start.y} L ${end.x} ${end.y}`}
        stroke={darkGreyColor}
        fill="none"
        strokeWidth={strokeWidth}
      />
    );
  }

  if (breakpoint.position === "end") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${start.x} ${end.y} L ${end.x} ${end.y}`}
        stroke={darkGreyColor}
        fill="none"
        strokeWidth={strokeWidth}
      />
    );
  }

  return (
    <path
      d={`M ${start.x} ${start.y} L ${end.x} ${end.y} `}
      stroke={darkGreyColor}
      strokeWidth={strokeWidth}
    />
  );
}

HorizontalBrokenLine.propTypes = {
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  breakpoint: PropTypes.shape({
    direction: PropTypes.oneOf("vertical", "horizontal"),
    position: PropTypes.oneOf("start", "center", "end")
  })
};

export default HorizontalBrokenLine;
