import React from 'react';
import './App.css';
import HeaderContainer from './componet/header/HeaderContainer';
import { Route } from 'react-router-dom';
import HomeContainer from './componet/home/HomeContainer';
import ExploreMore from './componet/explore-more/ExploreMore';
import Container from 'reactstrap/lib/Container';


function App() {

  let HomeRender = () => <HomeContainer/>;
  let ExploreMoreRender = () => <ExploreMore/>;

  return (
    <Container >
      <HeaderContainer />
      <Route path='/' exact render={HomeRender} />
      <Route path='/explore_more' exact render={ExploreMoreRender} />
    </Container>
  );
}

export default App;
