import React, { Component } from 'react';
import moduleCss from './FindOurProduct.module.css';
import { Container, Row, Col } from 'reactstrap';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconImg from '../../../assets/images/pasiv.png';
import terminalAdd1 from '../../../assets/images/DJI_0020.JPG'
import terminalAdd2 from '../../../assets/images/garni.png'

// const FindeOurProdutc = (props) => {
//   return (
//     <div>
//       find oure product
//       <div className={moduleCss.positionRelative}>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1100829.9624775872!2d44.70096238982575!3d40.35028880089609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1585776706696!5m2!1sru!2s" width="600" height="450" ></iframe>
//         <div className={moduleCss.positionAbsolute}>jjj</div>
//       </div>
//     </div>
//   )
// }

// export default FindeOurProdutc;


// type State = {
//   lat: number,
//   lng: number,
//   zoom: number,
// }

let myIcon = L.icon({
  iconUrl: iconImg,
  iconSize: [24, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});
class FindeOurProdutc extends React.Component {

  state = {
    positionCenter: {
      lat: 40.171644,
      lng: 44.519673,
      zoom: 15,
    },
    positionsMarker: [
      {
        lat: 40.171644,
        lng: 44.519673,
        popup: 'tatevi vanq',
        picture: terminalAdd1,
      },
      {
        lat: 40.182844,
        lng: 44.489860,
        popup: 'patkerasrah',
        picture: terminalAdd2,
      }
    ],
    pictureIndex: 1,
  }

  terminalPicture = (index) => {
    this.setState({
      pictureIndex: index,
    })
  }
  render() {
    const positionsMarker = this.state.positionsMarker.map(pos => [pos.lat, pos.lng]);
    const positionsPopup = this.state.positionsMarker.map(popup => popup.popup);
    const positionCenter = [this.state.positionCenter.lat, this.state.positionCenter.lng];
    const zoom = this.state.positionCenter.zoom;
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
                <Marker key={index} position={marker} icon={myIcon} onClick={() => this.terminalPicture(index)}>
                  <Popup>
                    <span>{positionsPopup[index]}</span>
                  </Popup>
                </Marker>

              )}
            </Map>
          </Col>
          <Col xs={4}>
            <img src={this.state.positionsMarker[this.state.pictureIndex].picture} alt=""/>
          </Col>

        </Row>
      </Container>
    )
  }
}

export default FindeOurProdutc;