import React from 'react';
import './App.css';
import HeaderContainer from './componet/header/HeaderContainer';
import { Route } from 'react-router-dom';
import HomeContainer from './componet/home/HomeContainer';
import Container from 'reactstrap/lib/Container';
import ExploreMoreContainer from './componet/explore-more/ExploreMoreContainer';


function App() {

  let HomeRender = () => <HomeContainer/>;
  let ExploreMoreRender = () => <ExploreMoreContainer/>;

  return (
    <Container >
      <HeaderContainer />
      <Route path='/' exact render={HomeRender} />
      <Route path='/explore_more' exact render={ExploreMoreRender} />
    </Container>
  );
}

export default App;
