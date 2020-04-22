import React from 'react';
import moduleCss from './Home.module.css'
import Slideshow from '../slider/SlideShow';
import TreavelCollectContainer from './travel&collect/TreavelCollectContainer';
import PleacesArmeniaContainer from './pleacesArmenia/PleacesArmeniaContainer';
import FindeOurProductContainer from './findeOurProduct/FindeOurProductContainer';

const Home = (props) => {


  return (
    <div>
      <div className="pb80">
        <Slideshow newProductImgs={props.newProductImgs} />
      </div>
      <div className="pb80">
        <TreavelCollectContainer />
      </div>
      <div>
        <PleacesArmeniaContainer />
      </div>
      <div>
        <FindeOurProductContainer />
      </div>      
    </div>
  )
}

export default Home;