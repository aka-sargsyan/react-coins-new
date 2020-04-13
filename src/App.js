import React from 'react';
import './App.css';
import HeaderContainer from './componet/header/HeaderContainer';
import { Route } from 'react-router-dom';
import HomeContainer from './componet/home/HomeContainer';
import Container from 'reactstrap/lib/Container';


function App() {

  let HomeRender = () => <HomeContainer/>;

  return (
    <Container >
      <HeaderContainer />
      <Route path='/' exact render={HomeRender} />
    </Container>
  );
}

export default App;
