import React from "react";
import Grid from "./Grid";
import Row from "./Row";
import Col from "./Col";

const TestGrid = () => {
  return (
    <Grid
      gap={20}
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
        <Col cols={2} md={5}>
          <div>Column 2</div>
        </Col>
        <Col cols={2} lg={9}>
          <div>Column 3</div>
        </Col>
        <Col cols={2} xs={2}>
          <div>Column 4</div>
        </Col>
      </Row>
    </Grid>
  );
};

export default TestGrid;
