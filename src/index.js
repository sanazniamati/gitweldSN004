import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Stage,
  Layer,
  Text,
  Rect,
  Group,
  Circle,
  Path,
  Arc,
  Line,
  Shape,
} from "react-konva";

const App = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [grad, setGrad] = useState(45);

  const alfa = grad;
  const a = 100;
  const b = 0;
  const c = 0;
  const x = 80;
  const y = 50;
  let q = 50 - (Math.atan(alfa) * (100 - 80)).toFixed(0);

  const handelIncWidth = () => {
    setWidth(width + 15);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
  };
  const handelIncHeight = () => {
    setHeight(height + 15);
  };
  const handelDecHeight = () => {
    setHeight(height - 15);
  };
  const handelIncDegree = () => {
    setGrad(((grad + 1) * Math.PI) / 180);
  };
  const handelDecDegree = () => {
    setGrad(((grad - 1) * Math.PI) / 180);
  };

  return (
    <>
      <div>
        <label>width : </label>
        <button onClick={handelIncWidth}>+</button>
        <button onClick={handelDecWidth}>-</button>
      </div>
      <div>
        <label>height : </label>
        <button onClick={handelIncHeight}>+ </button>
        <button onClick={handelDecHeight}>-</button>
      </div>
      <div>
        <label>degree : </label>
        <button onClick={handelIncDegree}>+ </button>
        <button onClick={handelDecDegree}>-</button>
      </div>

      <Stage width={700} height={700}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(a + width, b);
              context.lineTo(a, b);

              context.lineTo(c, b);
              context.lineTo(c, y + height);
              context.lineTo(x + width, y + height);
              context.lineTo(a + width, q + height);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
            fill="green"
            stroke="black"
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
