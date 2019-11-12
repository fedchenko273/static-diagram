import { DEFAULT_ARROW_SIZE, DEFAULT_DIRECTION } from "../constants";

export const getShift = (position, length) => {
  let shift = 0;
  switch (position) {
    case "start":
      shift = 0;
      break;

    case "center":
      shift = length / 2;
      break;

    case "end":
      shift = length;
      break;

    default:
      shift = 0;
  }

  return shift;
};

export const getRectPoint = (
  element = {},
  position = "center",
  direction = "top"
) => {
  const { coords: { x, y } = {}, size: { width, height } = {} } = element;

  const horizontalShift = getShift(position, width);
  const verticalShift = getShift(position, height);

  switch (direction) {
    case "top":
      return { x: x + horizontalShift, y };

    case "right":
      return { x: x + width, y: y + verticalShift };

    case "bottom":
      return { x: x + horizontalShift, y: y + height };

    case "left":
      return { x, y: y + verticalShift };

    default:
      return { x, y };
  }
};

export const getPoint = (
  element = {},
  position = "center",
  direction = "top"
) => {
  switch (element.type) {
    case "rect":
      return getRectPoint(element, position, direction);

    case "circle":
      return getCirclePoint(element, position, direction);

    default:
      return getRectPoint(element, position, direction);
  }
};

export const getCirclePoint = (
  element = {},
  position = "center",
  direction = "top"
) => {
  const { coords: { x, y } = {}, size: { raduis } = {} } = element;

  const diameter = 2 * raduis;

  const horizontalShift = getShift(position, diameter);
  const verticalShift = getShift(position, diameter);

  switch (direction) {
    case "top":
      return { x, y: y - verticalShift };

    case "right":
      return { x: x + horizontalShift, y };

    case "bottom":
      return { x, y: y + verticalShift };

    case "left":
      return { x: x - horizontalShift, y: y };

    default:
      return { x, y };
  }
};

export const getArrowCoords = (from, to) => {
  const {
    element: fromElement,
    position: fromElPosition,
    direction: fromElDirection
  } = from;
  const {
    element: toElement,
    position: toElPosition,
    direction: toElDirection
  } = to;

  const fromPoint = getPoint(fromElement, fromElPosition, fromElDirection);
  const toPoint = getPoint(toElement, toElPosition, toElDirection);

  return {
    start: fromPoint,
    end: toPoint
  };
};

export const getShiftedCoords = (
  coords,
  verticalDirection,
  horizontalDirection,
  arrowDirection = DEFAULT_DIRECTION
) => {
  const shiftedCoords = { ...coords };

  if (arrowDirection === "top" && verticalDirection === "top") {
    shiftedCoords.y = shiftedCoords.y + DEFAULT_ARROW_SIZE;
  }

  if (arrowDirection === "bottom" && verticalDirection === "bottom") {
    shiftedCoords.y = shiftedCoords.y - DEFAULT_ARROW_SIZE;
  }

  if (horizontalDirection === "left" && arrowDirection === "left") {
    shiftedCoords.x = shiftedCoords.x + DEFAULT_ARROW_SIZE;
  }

  if (horizontalDirection === "right" && arrowDirection === "right") {
    shiftedCoords.x = shiftedCoords.x - DEFAULT_ARROW_SIZE;
  }

  return shiftedCoords;
};

export const getCoordsShiftedByArrows = ({ start, end, arrows, direction }) => {
  const startArrow = arrows.find(arrow => arrow.position === "start");
  const endArrow = arrows.find(arrow => arrow.position === "end");

  let shiftedStart = { ...start };
  let shiftedEnd = { ...end };

  const verticalFrom = start.y < end.y ? "top" : "bottom";
  const verticalTo = start.y < end.y ? "bottom" : "top";

  const horizontalFrom = start.x < end.x ? "left" : "right";
  const horizontalTo = start.x < end.x ? "right" : "left";

  if (startArrow) {
    shiftedStart = getShiftedCoords(
      shiftedStart,
      verticalFrom,
      horizontalFrom,
      startArrow.direction
    );
  }

  if (endArrow) {
    shiftedEnd = getShiftedCoords(
      shiftedEnd,
      verticalTo,
      horizontalTo,
      endArrow.direction
    );
  }

  return { start: shiftedStart, end: shiftedEnd };
};

// start - coord(x, y)
// arrows - arrow to add
// direction - one of vertical(|) or horizontal(-)
export const getShiftedStart = (start, arrows = [], direction) => {
  let shiftedStart = { ...start };

  const arrow = arrows.find(arrow => arrow.position === "start");

  if (!arrow) {
    return shiftedStart;
  }

  const arrowDirection = arrow.direction; // one of top, right, bottom, left

  if (
    (direction === "vertical" && arrowDirection === "top") ||
    arrowDirection === "bottom"
  ) {
    shiftedStart = {
      ...start,
      x: start.x,
      y: start.y - DEFAULT_ARROW_SIZE
    };
  }

  if (
    (direction === "horizontal" && arrowDirection === "right") ||
    arrowDirection === "left"
  ) {
    shiftedStart = {
      ...start,
      x: start.x + DEFAULT_ARROW_SIZE,
      y: start.y
    };
  }

  return shiftedStart;
};

export const getShiftedEnd = (end, arrows, direction) => {
  const shiftedEnd =
    arrows.length && arrows.find(arrow => arrow.position === "end")
      ? {
          ...end,
          x: direction === "horizontal" ? end.x - DEFAULT_ARROW_SIZE : end.x,
          y: direction === "vertical" ? end.y - DEFAULT_ARROW_SIZE : end.y
        }
      : end;

  return shiftedEnd;
};
