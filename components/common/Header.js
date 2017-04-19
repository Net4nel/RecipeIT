import React, {Component} from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";


export default class Header extends Component{
    
    render(){

        // const divStyle = {
        //     height: '35px',
        //     width: '115px',
        // };


        const navbarInstance = (
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    {/*<a href="#"><b><img src="https://lh5.googleusercontent.com/Gn22jND2-NGO3bID846Y-YBymZfLT13UKx7N9LaDFRYZXQn9TSZHAdS7R2b3DLZNO6HN3mi0Y0B9UrM=w1920-h885-rw" style={divStyle}/></b></a>*/}
                      <a href="#"><b>RecipeIT</b></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <NavItem eventKey={1} href="#">דף הבית</NavItem>
                  <NavItem eventKey={2} href="#tips">טיפים</NavItem>
                  <NavItem eventKey={2} href="#about">קצת עלינו</NavItem>
                  <NavDropdown eventKey={3} title="ניווט מהיר" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href="#recipes">המתכונים שלנו</MenuItem>
                    <MenuItem eventKey={3.2}>חבילות מתכונים מותאמות</MenuItem>
                    <MenuItem eventKey={3.3}>תפריט ערב לפי בחירה</MenuItem>
                    <MenuItem eventKey={3.4} href="#recipeit">התחל עם RecipeIT!</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3} href="#settings">הגדרות</MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar>
    );
        return(navbarInstance);

     }
 }

