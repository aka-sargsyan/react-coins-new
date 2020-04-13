import React from 'react';
import moduleCss from './TreavelCollect.module.css';
import { Container, Row, Col } from 'reactstrap';

const TreavelCollect = (props) => {

  return (
    <Container className={moduleCss.gridContainer} >
      <Row>
        <Col lg={8} xs={7}>
          <div className={moduleCss.inform}>
            <div className={moduleCss.header}>
              <h3>{props.treavelCollectInform.header}</h3>
            </div>
            <div>
              {props.treavelCollectInform.description.map(text => <div key={text.id} className={moduleCss.text}>
                {text.text}
              </div>)}
            </div>
            <div className={`${moduleCss.text} pt20`}>
              {props.treavelCollectInform.footer}
            </div>
          </div>
        </Col>
        <Col lg={4} xs={5}>
          {/* <div className={moduleCss.fotos} > */}
          <div className={`${moduleCss.positionRelative}`}>
            {props.treavelCollectInform.fotos.map((fotos, index) => <div key={fotos.id} className={`${moduleCss.coinImg} ${moduleCss.positionAbsolut} ${index === 0 ? moduleCss.topCoin : moduleCss.bottomCoin}`}>
              <img src={fotos.img} alt="" />
            </div>)}
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  )
}

export default TreavelCollect;