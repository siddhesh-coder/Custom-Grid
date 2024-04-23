import React, { createContext, useState } from "react";

const GridContext = createContext();

const GridProvider = ({ children }) => {
  const [gridProps, setGridProps] = useState({
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  });
  const [gap, setGap] = useState(10);

  const [spacing, setSpacing] = useState(0);

  return (
    <GridContext.Provider value={{ gridProps, setGridProps, gap, setGap, spacing, setSpacing }}>
      {children}
    </GridContext.Provider>
  );
};

export { GridContext, GridProvider };
