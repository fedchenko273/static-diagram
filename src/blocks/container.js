import React from "react";

const Container = ({ width, height, children }) => {
  return (
    <svg width={width} height={height}>
      {children}
    </svg>
  );
};

export default Container;
