import React from "react";
import PropTypes from "prop-types";
import BrokenLine from "./lines/BrokenLine";
import LinesArrow from "./arrows/LinesArrow";
import { DEFAULT_ARROW_SIZE } from "./constants";

function Path({ start, end, breakpoint = {}, arrows = [] }) {
  const direction = breakpoint.direction || "horizontal";

  const shiftedStart =
    arrows.length && arrows.find(arrow => arrow.position === "start")
      ? {
          ...start,
          x:
            direction === "horizontal" ? start.x + DEFAULT_ARROW_SIZE : start.x,
          y: direction === "vertical" ? start.y + DEFAULT_ARROW_SIZE : start.y
        }
      : start;

  const shiftedEnd =
    arrows.length && arrows.find(arrow => arrow.position === "end")
      ? {
          ...end,
          x: direction === "horizontal" ? end.x - DEFAULT_ARROW_SIZE : end.x,
          y: direction === "vertical" ? end.y - DEFAULT_ARROW_SIZE : end.y
        }
      : end;

  return (
    <g>
      <BrokenLine
        start={shiftedStart}
        end={shiftedEnd}
        breakpoint={breakpoint}
      />
      {arrows.map(arrow => (
        <LinesArrow
          direction={arrow.direction}
          position={arrow.position}
          start={shiftedStart}
          end={shiftedEnd}
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
