import React from 'react';
import moduleCss from './Header.module.css'
import { NavLink } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';


const Header = (props) => {

  return (
    <Container className={`pb80 ${moduleCss.header}`}>
      <Row>
        <Col>
          <header className={`flexStart flexAlinCenter flexBetween ${moduleCss.headerContainer}`}>
            <NavLink to={`/`}>
              <img src={props.logo} alt="" width='240' height='120' />
            </NavLink>
            <nav>
              <ul>
                {props.menu.map(item =>
                  <li key={item.id} className='pl5 pr5'>
                    <NavLink to={`/${props.deleteSpace(item.part)}`} activeClassName={moduleCss.active}>{item.part}</NavLink>
                  </li>)}
              </ul>
            </nav>
          </header>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;