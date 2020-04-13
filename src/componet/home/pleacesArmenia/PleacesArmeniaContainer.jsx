import React from 'react';
import PleacesArmenia from './PleacesArmenia';
import { connect } from 'react-redux';
import { displayShadow, displayShadowClose } from '../../../redux/home-reduser';

class PleacesArmeniaContainer extends React.Component {

  pleaceImgClick = (index) => {
    this.props.displayShadow(index);
  }

  shadowCloseClick = () => {
    this.props.displayShadowClose();
  }

  render() {
    return (
      <PleacesArmenia pleacesArmenia={this.props.pleacesArmenia}
        displayShadowBool={this.props.displayShadowBool}
        index={this.props.index}
        pleaceImgClick={this.pleaceImgClick}
        shadowCloseClick={this.shadowCloseClick}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    pleacesArmenia: state.homePage.pleacesArmenia.foto,
    displayShadowBool: state.homePage.pleacesArmenia.displayShadowBool,
    index: state.homePage.pleacesArmenia.index
  }
}



export default connect(mapStateToProps, { displayShadow, displayShadowClose })(PleacesArmeniaContainer);