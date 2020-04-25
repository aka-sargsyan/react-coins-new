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

class Slideshow extends React.Component {
  state = {
    products: ['0', '1', '2','3'],
    number: 0,
  };

  cheangeNumber(number) {
    console.log(number);
    this.setState({
      number: (number + 1) % this.state.products.length
    })
  }



  render() {
    return (
      <Container className={moduleCss.slideshow}>
        <Row>
          <Col>
            <div className={moduleCss.newProduct}>
              <p className="">{this.state.products[this.state.number]}</p>
            </div>
            <div className={moduleCss.headerExplore}>
              <p>Explore More</p>
            </div>
            <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
              <Slide  {...properties} onChange={(event) => this.cheangeNumber(event)}>
                {this.props.newProductImgs.map((picture,index) =>
                  <div key={picture.id} className={moduleCss.eachSlide} >
                    <img src={picture.productImg} title={index}/>
                  </div>

                )}
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}



export default Slideshow;