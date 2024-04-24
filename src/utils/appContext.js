import React, { createContext } from "react";

const initState = {
  gap: 10,
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  spacing: 0,
};

const GridContext = createContext(initState);

const GridProvider = ({
  children,
  gap,
  direction,
  justifyContent,
  alignItems,
  spacing,
}) => {
  return (
    <GridContext.Provider
      value={{ gap, direction, justifyContent, alignItems, spacing }}
    >
      {children}
    </GridContext.Provider>
  );
};

export { GridContext, GridProvider };
