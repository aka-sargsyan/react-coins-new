import React from 'react';
import { Slide } from 'react-slideshow-image';
import moduleCss from './SlideShow.module.css'
import { Container, Row, Col } from 'reactstrap';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
}

const Slideshow = (props) => {
  return (
    <Container className={moduleCss.slideshow}>
      <Row>
        <Col>
          <div className={moduleCss.newProduct}>
            <p className="">NEW PRODUCT FROM MATENADARAN</p>
          </div>
          <div className={moduleCss.headerExplore}>
            <p>Explore More</p>
          </div>
          <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
            <Slide  {...properties}>
              {props.newProductImgs.map(picture =>
                <div key={picture.id} className={moduleCss.eachSlide}>
                  <img src={picture.productImg} />
                </div>

              )}
            </Slide>
          </div>
        </Col>
      </Row>
    </Container>
  )
}



export default Slideshow;