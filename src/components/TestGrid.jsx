import React from 'react'
import { GridProvider } from '../utils/appContext'
import Grid from './Grid'
import Row from './Row'
import Col from './Col'

const TestGrid = () => {
  return (
    <GridProvider>
      <Grid
        gap={10}
        spacing={40}
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
      </GridProvider>
  )
}

export default TestGrid