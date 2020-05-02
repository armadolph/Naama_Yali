import React, { Component} from 'react';
import { Navbar,  Nav} from 'react-bootstrap';
import Routes from './Route';

class Navigation extends Component{
  render(){
    return(
    <div> 
        <Navbar class="main-navbar " bg="light" expand="lg" Style="float:right width:100%" >
          <Navbar.Brand href="/">שירותי מזון - קיבוץ שפיים</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/theteam">הכירו את הצוות</Nav.Link>
              <Nav.Link href="/diningroom">חדר אוכל</Nav.Link>
              <Nav.Link href="/marcol">מרכול</Nav.Link>
              <Nav.Link href="/photos">תמונות</Nav.Link>
              <Nav.Link href="/contact">צור קשר</Nav.Link>
              <Nav pullLeft>
                <li className="nav-item"><a href="https://www.facebook.com/profile.php?id=100012585901863" className="nav-link"><i className="fa fa-facebook"></i></a></li>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Routes/>
    </div>
    )}
}

export default Navigation;
