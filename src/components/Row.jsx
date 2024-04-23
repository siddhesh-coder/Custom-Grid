import { useContext } from "react";
import { GridContext } from "../utils/appContext";

const styles = {
  app: {
    display: "flex",
    flex: 4,
    margin: "0 auto",
    width: "100%",
    padding: "10px",
    border: "2px solid #ccc",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
};

const Row = ({ children }) => {
  const { gridProps, gap } = useContext(GridContext);

  return <div style={{ ...styles.row, ...gridProps, gap }}>{children}</div>;
};
export default Row;
