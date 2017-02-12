import React, { Component } from 'react'
import bootstrap from 'react-bootstrap'
import { Tab,Row,Col,Nav,Navbar,NavDropdown,MenuItem,NavItem, Button } from 'react-bootstrap';



export default class Header extends Component{
    
    render(){
    const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><b>RecipeIT</b></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">דף הבית</NavItem>
      <NavItem eventKey={2} href="#">טיפים</NavItem>
      <NavItem eventKey={2} href="#">קצת עלינו</NavItem>
      <NavDropdown eventKey={3} title="ניווט מהיר" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>המתכונים שלנו</MenuItem>
        <MenuItem eventKey={3.2}>חבילות מתכונים מותאמות</MenuItem>
        <MenuItem eventKey={3.3}>תפריט ערב לפי בחירה</MenuItem>
        <MenuItem eventKey={3.4}>התחל עם RecipeIT!</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>הגדרות</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
        return(navbarInstance);

     }
 }

