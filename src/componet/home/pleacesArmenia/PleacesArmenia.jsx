import React from 'react';
import moduleCss from './PleacesArmenia.module.css';
import { Container, Row, Col } from 'reactstrap';

const PleacesArmenia = (props) => {

  return (
    <div>

      <div className={props.displayShadowBool === true ? `${moduleCss.gallery}` : `${moduleCss.gallery} ${moduleCss.pop}`}>
        <Container>
          <Row>
            <Col>
              <h3 className={moduleCss.titleFontSize}>PLACES TO VISIT IN ARMENIA</h3>
            </Col>
          </Row>
          <Row>
            {props.pleacesArmenia.map((foto, index) =>
              <Col lg={3} md={4} xs={6} key={foto.id}>
                <figure onClick={() => { props.pleaceImgClick(index) }}>
                  <img src={foto.pleaceFoto} alt="" />
                  <h3 className='textAlignCenter'>{foto.text}</h3>
                </figure>
              </Col>
            )}
          </Row>
        </Container>

      </div>


      <div>
        {!props.displayShadowBool ?
          <div className={`${moduleCss.popup} ${moduleCss.pop}`} onClick={() => { props.shadowCloseClick() }}>
            <figure >
              <img src={props.pleacesArmenia[props.index].pleaceFoto} alt="" />
              <h3 className='textAlignCenter p10'>{props.pleacesArmenia[props.index].text}</h3>
            </figure>
          </div> : ''}
      </div>

    </div>
  )
}

export default PleacesArmenia;