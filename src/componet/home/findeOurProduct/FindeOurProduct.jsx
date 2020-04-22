import React, { Component } from 'react';
import moduleCss from './FindOurProduct.module.css';
import { Container, Row, Col } from 'reactstrap';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconImg from '../../../assets/images/pasiv.png';

let myIcon = L.icon({
  iconUrl: iconImg,
  iconSize: [24, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

const FindeOurProduct = (props) => {

    const positionsMarker = props.findeOurProduct.positionsMarker.map(pos => [pos.lat, pos.lng]);
    const positionsPopup = props.findeOurProduct.positionsMarker.map(popup => popup.popup);
    const positionCenter = [props.findeOurProduct.positionCenter.lat, props.findeOurProduct.positionCenter.lng];
    const zoom = props.findeOurProduct.positionCenter.zoom;
    return (
      <Container>
        <Row>
          <Col xs={8}>
            <Map className='map' center={positionCenter} zoom={zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {positionsMarker.map((marker, index) =>
                <Marker key={index} position={marker} icon={myIcon} onClick={() => props.pleacePictureIndex(index)}>
                  <Popup>
                    <span>{positionsPopup[index]}</span>
                  </Popup>
                </Marker>

              )}
            </Map>
          </Col>
          <Col xs={4}>
            <img src={props.findeOurProduct.positionsMarker[props.findeOurProduct.pictureIndex].picture} alt=""/>
          </Col>
        </Row>
      </Container>
    )
  
}


export default FindeOurProduct;