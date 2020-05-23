import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const ExploreMore = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={props.explorePage.productImg} alt="" />
        </Col>
      </Row>
    </Container>
  )
}
export default ExploreMore;