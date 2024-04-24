import "./App.css";
import Col from "./components/Col";
import Grid from "./components/Grid";
import Row from "./components/Row";
import TestGrid from "./components/TestGrid";

function App() {
  return (
    <div className="app">
      <h1>Grid 1</h1>
      <Grid
        gap={10}
        spacing={10}
        wrap="wrap"
        // direction={"row"} //!also try this
        // justifyContent={"space-evenly"}
        // alignItems={"flex-start"}
      >
        <Row>
          <Col cols={2} xs={2}>
            <div>Column 1</div>
          </Col>
          <Col cols={2} xs={2}>
            <div>Column 2</div>
          </Col>
          <Col cols={2} xs={2}>
            <div>Column 3</div>
          </Col>
          <Col cols={2} xs={2}>
            <div>Column 4</div>
          </Col>
        </Row>
        <Row>
          <Col cols={2} xs={2}>
            <div>Column 5</div>
          </Col>
          <Col cols={2} xs={2}>
            <div>Column 6</div>
          </Col>
        </Row>
      </Grid>
      <h1>Grid 2</h1>
      <TestGrid/>
    </div>
  );
}

export default App;
