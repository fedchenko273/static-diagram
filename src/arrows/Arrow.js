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
  arrows: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.oneOf(["start", "end"]),
      direction: PropTypes.oneOf(["top", "right", "bottom", "left"])
    })
  ),
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      direction: PropTypes.oneOf(["vertical", "horizontal"]),
      position: PropTypes.oneOf(["start", "center", "end"])
    })
  )
};

export default Arrow;
