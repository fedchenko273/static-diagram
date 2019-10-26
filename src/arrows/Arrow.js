import React from "react";
import PropTypes from "prop-types";
import Path from "../Path";

function Arrow(props) {
  const { start, end, breakpoints, arrows } = props;

  return (
    <g>
      <Path start={start} end={end} breakpoint={breakpoints} arrows={arrows} />
    </g>
  );
}

Arrow.propTypes = {
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  startArrow: PropTypes.shape({
    direction: PropTypes.oneOf(["top", "left", "right", "bottom"])
  }),
  endArrow: PropTypes.shape({
    direction: PropTypes.oneOf(["top", "left", "right", "bottom"])
  }),
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      direction: PropTypes.oneOf(["vertical", "horizontal"]),
      position: PropTypes.oneOf(["start", "center", "end"])
    })
  )
};

export default Arrow;
