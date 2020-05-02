import React, { Component} from 'react';
import { Navbar,  Nav} from 'react-bootstrap';

class Navigation extends Component{
  render(){
    return(
    <div> 
    <Navbar class="main-navbar" bg="light" expand="lg" Style="float:right width:100%" >
    <Navbar.Brand href="#home"  >שירותי מזון - קיבוץ שפיים</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="Theteam.js">הכירו את הצוות</Nav.Link>
      <Nav.Link href="#link">חדר אוכל</Nav.Link>
      <Nav.Link href="#link">מרכול</Nav.Link>
        {/* <NavDropdown title="חדר אוכל" id="dining-room">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="#link">תמונות</Nav.Link>
        <Nav.Link href="#link">צור קשר</Nav.Link>
        <Nav pullLeft>
        {/* <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f pr-1"></i> Facebook</button> */}
        <li class="nav-item"><a href="https://www.facebook.com/profile.php?id=100012585901863" class="nav-link"><i class="fa fa-facebook"></i></a></li>

            </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <br />
    </div>
    )}
}

export default Navigation;
