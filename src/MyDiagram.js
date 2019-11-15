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

function MyDiagram() {
  return (
    <Diagram width={800} height={1000}>
      <Shape {...rect1} state="active" label="1" />
      <Shape {...rect2} label="2" />
      <Shape {...rect3} state="error" label="3" />
      <Shape {...rect4} label="4" />
      <Shape {...rect5} state="error" label="5" />
      <Shape {...circle1} state="success" label="1" />
      <Shape {...circle2} label="2" />
      <Arrow
        {...getArrowCoords(
          { element: rect2, direction: "right" },
          { element: rect3, direction: "left" }
        )}
        breakpoints={{ position: "center" }}
        arrows={[{ position: "start", direction: "left" }]}
      />
      <Arrow
        {...getArrowCoords(
          { element: rect3, direction: "right" },
          { element: rect1, direction: "left" }
        )}
        breakpoints={{ position: "center" }}
      />
      <Arrow
        {...getArrowCoords(
          { element: rect1, direction: "bottom" },
          { element: rect4 }
        )}
        breakpoints={{ position: "center", direction: "vertical" }}
      />
      <Arrow
        {...getArrowCoords(
          { element: rect4, direction: "bottom" },
          { element: rect5 }
        )}
        breakpoints={{ position: "center", direction: "vertical" }}
        arrows={[
          { position: "start" },
          { position: "end", direction: "bottom" }
        ]}
      />
      <Arrow
        {...getArrowCoords(
          { element: circle1, direction: "top" },
          { element: rect4, direction: "left" }
        )}
        breakpoints={{ position: "center", direction: "horizontal" }}
        arrows={[
          { position: "start", direction: "bottom" },
          { position: "end", direction: "right" }
        ]}
      />
      <Arrow
        {...getArrowCoords(
          { element: circle1, direction: "bottom" },
          { element: circle2, direction: "top" }
        )}
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
