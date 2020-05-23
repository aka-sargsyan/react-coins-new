import React,{ useState }from 'react';
import { Slide } from 'react-slideshow-image';
import moduleCss from './SlideShow.module.css'
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// class Slideshow extends React.Component {

//   state = {
//     number: 0,
//   };
//    properties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: false,
//     arrows: true,
//     onChange: (oldIndex, newIndex) => {
//       // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//       this.setState({number: newIndex})
//     }
//   }

//   onClickExplore(event) {
//     this.props.exploreMoreNumber(this.state.number)
//   }

//   render() {
//     return (
//       <Container className={moduleCss.slideshow}>
//         <Row>
//           <Col>
//             <div className={moduleCss.newProduct}>
//               {/* <p className="">{this.state.products[this.state.number]}</p> */}
//               <p className="">{this.props.newProduct[this.state.number].name}</p>
//             </div>
//             <div className={moduleCss.headerExplore}>
//               <NavLink to="/explore_more" className={moduleCss.textHoverNone} onClick={() => this.onClickExplore()}><p>Explore More</p></NavLink>
//             </div>
//             <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
//               <Slide  {...this.properties}>
//                 {this.props.newProduct.map((picture, index) =>
//                   <div key={picture.id} className={moduleCss.eachSlide} >
//                     <img src={picture.productImg} title={index} />
//                   </div>
//                 )}
//               </Slide>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//     )
//   }
// }

const Slideshow = (props) => {

  let [number, setNumber] = useState(0);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
     setNumber(newIndex)
    }
  }

  const onClickExplore = () => {
    props.exploreMoreNumber(number)
  }

  return (
    <Container className={moduleCss.slideshow}>
      <Row>
        <Col>
          <div className={moduleCss.newProduct}>
            <p className="">{props.newProduct[number].name}</p>
          </div>
          <div className={moduleCss.headerExplore}>
            <NavLink to="/explore_more" className={moduleCss.textHoverNone} onClick={() => onClickExplore()}><p>Explore More</p></NavLink>
          </div>
          <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
            <Slide  {...properties}>
              {props.newProduct.map((picture, index) =>
                <div key={picture.id} className={moduleCss.eachSlide} >
                  <img src={picture.productImg} title={index} />
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