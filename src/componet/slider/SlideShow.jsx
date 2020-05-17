import React from 'react';
import { Slide } from 'react-slideshow-image';
import moduleCss from './SlideShow.module.css'
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
}

// class Slideshow extends React.Component {
//   state = {
//     number: 0,
//   };

//   cheangeNumber(number) {
//     this.setState({
//       number: (number + 1) % this.props.newProduct.length
//     })
//   }

//   onClickExplore(number){

//   }

//   render() {
//     debugger;
//     return (
//       <Container className={moduleCss.slideshow}>
//         <Row>
//           <Col>
//             <div className={moduleCss.newProduct}>
//               {/* <p className="">{this.state.products[this.state.number]}</p> */}
//               <p className="">{this.props.newProduct[this.state.number].name}</p>
//             </div>
//             <div className={moduleCss.headerExplore}>
//              <NavLink to="/explore_more" className={moduleCss.textHoverNone} onClick={()=>alert(this.state.number)}><p>Explore More</p></NavLink> 
//             </div>
//             <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
//               <Slide  {...properties} onChange={(event) => this.cheangeNumber(event)}>
//                 {this.props.newProduct.map((picture,index) =>
//                   <div key={picture.id} className={moduleCss.eachSlide} >
//                     <img src={picture.productImg} title={index}/>
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

  const cheangeNumber = (number) => {
    setNumber((number + 1) % props.newProduct.length)
  }

  const onClickExplore = (number) => {
    props.exploreMoreNumber(number)
  }


  return (
    <Container className={moduleCss.slideshow}>
      <Row>
        <Col>
          <div className={moduleCss.newProduct}>
            {/* <p className="">{this.state.products[this.state.number]}</p> */}
            <p className="">{props.newProduct[number].name}</p>
          </div>
          <div className={moduleCss.headerExplore}>
            <NavLink to="/explore_more" className={moduleCss.textHoverNone} onClick={() => onClickExplore(number)}><p>Explore More</p></NavLink>
          </div>
          <div className={`${moduleCss.allImg} ${moduleCss.slideContainer}`}>
            <Slide  {...properties} onChange={(event) => cheangeNumber(event)}>
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