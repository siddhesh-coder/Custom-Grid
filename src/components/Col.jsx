import { useContext } from "react";
import { GridContext } from "../utils/appContext";

const Col = ({ xs, sm, md, lg, children }) => {
  const { spacing } = useContext(GridContext);
  const setColStyles = {
    border: "1px solid",
    flex: 1,
    maxWidth: "100%",
    margin: spacing,
  };

  if (xs) {
    setColStyles.flex = xs;
    setColStyles.maxWidth = `calc(${(xs / 12) * 100}% - 20px)`;
  }
  if (sm) {
    setColStyles["@media (min-width: 600px)"] = {
      flex: sm,
      maxWidth: `calc(${(sm / 12) * 100}% - 20px)`,
    };
  }
  if (md) {
    setColStyles["@media (min-width: 960px)"] = {
      flex: md,
      maxWidth: `calc(${(md / 12) * 100}% - 20px)`,
    };
  }
  if (lg) {
    setColStyles["@media (min-width: 1280px)"] = {
      flex: lg,
      maxWidth: `calc(${(lg / 12) * 100}% - 20px)`,
    };
  }

  return <div style={setColStyles}>{children}</div>;
};

export default Col;
