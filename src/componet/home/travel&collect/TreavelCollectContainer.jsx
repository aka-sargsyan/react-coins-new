import React from 'react';
import { connect } from 'react-redux';
import TreavelCollect from './TravelCollect';

class TreavelCollectContainer extends React.Component {
  render() {
    return (
      <TreavelCollect treavelCollectInform={this.props.treavelCollectInform} />
    )
  }
}

let mapStateToProps = (state) => {

  return {
    treavelCollectInform: state.homePage.treavelCollectInform

  }
}

export default connect(mapStateToProps, {})(TreavelCollectContainer);