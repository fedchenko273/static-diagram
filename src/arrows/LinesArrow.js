import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_ARROW_SIZE } from "../constants";

function LinesArrow({ coords, direction }) {
  switch (direction) {
    case "top":
      return (
        <path
          d={`M ${coords.x} ${coords.y}
              h -${DEFAULT_ARROW_SIZE / 2}
              L ${coords.x} ${coords.y - DEFAULT_ARROW_SIZE}
              L ${coords.x + DEFAULT_ARROW_SIZE / 2} ${coords.y}

          `}
        />
      );

    case "right":
      return (
        <path
          d={`M ${coords.x} ${coords.y}
            v -${DEFAULT_ARROW_SIZE / 2}
            L ${coords.x + DEFAULT_ARROW_SIZE} ${coords.y}
            L ${coords.x} ${coords.y + DEFAULT_ARROW_SIZE / 2} 
      `}
        />
      );

    case "bottom":
      return (
        <path
          d={`M ${coords.x} ${coords.y}
                h ${DEFAULT_ARROW_SIZE / 2}
                L ${coords.x} ${coords.y + DEFAULT_ARROW_SIZE}
                L ${coords.x - DEFAULT_ARROW_SIZE / 2} ${coords.y}
      `}
        />
      );

    case "left":
      return (
        <path
          d={`
        M ${coords.x} ${coords.y}
        v -${DEFAULT_ARROW_SIZE / 2}
        L ${coords.x - DEFAULT_ARROW_SIZE} ${coords.y}
        L ${coords.x} ${coords.y + DEFAULT_ARROW_SIZE / 2}
      `}
        />
      );

    default:
      return (
        <path
          d={`M ${coords.x} ${coords.y}
              h -${DEFAULT_ARROW_SIZE / 2}
              L ${coords.x} ${coords.y - DEFAULT_ARROW_SIZE}
              L ${coords.x + DEFAULT_ARROW_SIZE / 2} ${coords.y}

          `}
        />
      );
  }
}

export default LinesArrow;

LinesArrow.propTypes = {
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
      position: PropTypes.oneOf("start", "end"),
      direction: PropTypes.oneOf("top", "right", "bottom", "left")
    })
  )
};
