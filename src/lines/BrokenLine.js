import React from "react";
import PropTypes from "prop-types";
import VerticalBrokenLine from "./VerticalBrokenLine";
import HorizontalBrokenLine from "./HorizontalBrokenLine";

function BrokenLine({ start, end, breakpoint = {} }) {
  return breakpoint.direction === "vertical" ? (
    <VerticalBrokenLine start={start} end={end} breakpoint={breakpoint} />
  ) : (
    <HorizontalBrokenLine start={start} end={end} breakpoint={breakpoint} />
  );
}

BrokenLine.propTypes = {
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

export default BrokenLine;
