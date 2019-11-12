import React from "react";
import Arrow from "./arrows/Arrow";
import Shape from "./shapes/Shape";
import { getArrowCoords } from "./utils/arrows";
import Diagram from "./blocks/container";
import {
  rect1,
  rect2,
  rect3,
  rect4,
  rect5,
  circle1,
  circle2
} from "./geometricElements";

const shapes = [rect1, rect2, rect3, rect4, rect5, circle1, circle2];

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

const arrowFromRect4ToRect5 = getArrowCoords(
  { element: rect4, direction: "bottom" },
  { element: rect5 }
);

const arrowFromRect4ToCircle1 = getArrowCoords(
  { element: circle1, direction: "top" },
  { element: rect4, direction: "left" }
);

const arrowFromCircle1ToCircle2 = getArrowCoords(
  { element: circle1, direction: "bottom" },
  { element: circle2, direction: "top" }
);

function MyDiagram() {
  return (
    <Diagram width={800} height={1000}>
      {shapes.map(({ coords, size, type, view, label, state }) => {
        return (
          <Shape
            type={type}
            coords={coords}
            size={size}
            view={view}
            label={label}
            state={state}
          />
        );
      })}
      <Arrow
        start={arrowFromRect2ToRect3.start}
        end={arrowFromRect2ToRect3.end}
        breakpoints={{ position: "center" }}
        arrows={[{ position: "start", direction: "left" }]}
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
      <Arrow
        start={arrowFromRect4ToRect5.start}
        end={arrowFromRect4ToRect5.end}
        breakpoints={{ position: "center", direction: "vertical" }}
        arrows={[
          { position: "start" },
          { position: "end", direction: "bottom" }
        ]}
      />
      <Arrow
        start={arrowFromRect4ToCircle1.start}
        end={arrowFromRect4ToCircle1.end}
        breakpoints={{ position: "center", direction: "horizontal" }}
        arrows={[
          { position: "start", direction: "bottom" },
          { position: "end", direction: "right" }
        ]}
      />
      <Arrow
        start={arrowFromCircle1ToCircle2.start}
        end={arrowFromCircle1ToCircle2.end}
        breakpoints={{ position: "center", direction: "vertical" }}
        arrows={[
          {
            position: "start",
            direction: "top"
          },
          {
            position: "end",
            direction: "bottom"
          }
        ]}
      />
    </Diagram>
  );
}

export default MyDiagram;
