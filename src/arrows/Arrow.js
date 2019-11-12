import React from "react";
import PropTypes from "prop-types";
import BrokenLine from "../lines/BrokenLine";
import LinesArrow from "../arrows/LinesArrow";
import { getCoordsShiftedByArrows } from "../utils/arrows";
import { DEFAULT_DIRECTION } from "../constants";

function Path({ start, end, breakpoints = {}, arrows = [] }) {
  const direction = breakpoints.direction || "horizontal";

  const { start: shiftedStart, end: shiftedEnd } = getCoordsShiftedByArrows({
    start,
    end,
    arrows,
    direction
  });

  return (
    <g>
      <BrokenLine
        start={shiftedStart}
        end={shiftedEnd}
        breakpoint={breakpoints}
      />
      {arrows.map(arrow => (
        <LinesArrow
          direction={arrow.direction || DEFAULT_DIRECTION}
          position={arrow.position}
          coords={arrow.position === "start" ? shiftedStart : shiftedEnd}
        />
      ))}
    </g>
  );
}

Path.propTypes = {
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  breakpoint: PropTypes.shape({
    direction: PropTypes.oneOf(["vertical", "horizontal"]),
    position: PropTypes.oneOf(["start", "center", "end"])
  }),
  arrows: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.oneOf(["start", "end"]),
      direction: PropTypes.oneOf(["top", "right", "bottom", "left"])
    })
  )
};

export default Path;
