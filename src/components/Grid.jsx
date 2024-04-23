import React, { useContext, useEffect } from "react";
import { GridContext } from "../utils/appContext";

const Grid = ({
  children,
  wrap = "wrap",
  spacing = 0,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap,
}) => {
  const { setGridProps, setGap, setSpacing } = useContext(GridContext);

  useEffect(() => {
    setGridProps({
      direction: direction,
      justifyContent: justifyContent,
      alignItems: alignItems,
    });
    setGap(gap);
    setSpacing(spacing);
  }, [
    direction,
    justifyContent,
    alignItems,
    setGridProps,
    setGap,
    gap,
    spacing,
    setSpacing,
  ]);

  return (
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
  );
};

export default Grid;
