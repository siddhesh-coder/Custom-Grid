import React from "react";
import { GridProvider } from "../utils/appContext";

const Grid = ({
  children,
  wrap = "wrap",
  spacing = 0,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap,
}) => {
  return (
    <GridProvider
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
      <div
        style={{
          display: "flex",
          flex: 8,
          margin: "0 auto",
          width: "100%",
          flexDirection: "row",
          flexWrap: wrap,
        }}
      >
        {children}
      </div>
    </GridProvider>
  );
};

export default Grid;
