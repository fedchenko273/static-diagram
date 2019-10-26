import React from "react";
import Arrow from "./arrows/Arrow";
import Shape from "./shapes/Shape";
import { getArrowCoords } from "./utils/arrows";

const rect1 = {
  type: "rect",
  coords: { x: 440, y: 280 },
  size: { width: 78, height: 66 },
  view: {
    fill: "white",
    stroke: "red"
  },
  label: 1
};

const rect2 = {
  type: "rect",
  coords: { x: 20, y: 50 },
  size: { width: 120, height: 80 },
  view: {
    fill: "white",
    stroke: "green"
  },
  label: 2
};

const rect3 = {
  type: "rect",
  coords: { x: 240, y: 120 },
  size: { height: 40, width: 80 },
  view: {
    fill: "white",
    stroke: "blue"
  },
  label: 3
};

const rect4 = {
  type: "rect",
  coords: { x: 400, y: 420 },
  size: { height: 66, width: 78 },
  view: {
    fill: "white",
    stroke: "purple"
  },
  label: 4
};

const rect5 = {
  type: "rect",
  coords: { x: 650, y: 550 },
  size: { height: 90, width: 60 },
  view: {
    fill: "white",
    stroke: "black"
  },
  label: 5
};

const shapes = [rect1, rect2, rect3, rect4];

const arrowFromRect2ToRect3 = getArrowCoords(
  { element: rect2, direction: "right" },
  { element: rect3, direction: "left" }
);

const arrowFromRect3ToRect1 = getArrowCoords(
  { element: rect3, direction: "right" },
  { element: rect1, direction: "left" }
);

const arrowFromRect1ToRect4 = getArrowCoords(
  { element: rect1, direction: "bottom" },
  { element: rect4 }
);

function Scene() {
  return (
    <svg width="800" height="800">
      {shapes.map(({ coords, size, type, view, label }) => {
        return (
          <Shape
            type={type}
            coords={coords}
            size={size}
            view={view}
            label={label}
          />
        );
      })}
      <Arrow
        start={arrowFromRect2ToRect3.start}
        end={arrowFromRect2ToRect3.end}
        breakpoints={{ position: "center" }}
      />
      <Arrow
        start={arrowFromRect3ToRect1.start}
        end={arrowFromRect3ToRect1.end}
        breakpoints={{ position: "center" }}
      />
      <Arrow
        start={arrowFromRect1ToRect4.start}
        end={arrowFromRect1ToRect4.end}
        breakpoints={{ position: "center", direction: "vertical" }}
      />
    </svg>
  );
}

export default Scene;
