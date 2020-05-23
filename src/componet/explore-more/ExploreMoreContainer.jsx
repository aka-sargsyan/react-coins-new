import React from 'react';
import ExploreMore from './ExploreMore'
import { connect } from 'react-redux';

class ExploreMoreContainer extends React.Component {
  render() {
    return (
      <div>
        <ExploreMore explorePage={this.props.explorePage}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return {
    slideNumber: state.homePage.slideNumber,
    explorePage: state.homePage.newProduct[state.homePage.slideNumber],
  }
}

export default connect(mapStateToProps,{})(ExploreMoreContainer);