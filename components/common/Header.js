import React, {Component} from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from 'react-router';

const Header = () => {
    return(
        <div className="header page-wrap">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*<a href="#"><b><img src="https://lh5.googleusercontent.com/Gn22jND2-NGO3bID846Y-YBymZfLT13UKx7N9LaDFRYZXQn9TSZHAdS7R2b3DLZNO6HN3mi0Y0B9UrM=w1920-h885-rw" style={divStyle}/></b></a>*/}
                        <a href="#"><b>RecipeIT</b></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}><Link to="/">דף הבית</Link></NavItem>
                    <NavItem eventKey={2}><Link to="newRecipe">מתכון חדש</Link></NavItem>
                    <NavItem eventKey={3}><Link to="recipes">מאגר המתכונים</Link></NavItem>
                    <NavItem eventKey={4}><Link to="sp">RecipeIT</Link></NavItem>
                    <NavItem eventKey={2}><Link to="about">קצת עלינו</Link></NavItem>
                    <NavDropdown eventKey={3} title="ניווט מהיר" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><Link to="recipes">מאגר המתכונים</Link></MenuItem>
                        <MenuItem eventKey={3.2}><Link to="404">חבילות מתכונים</Link></MenuItem>
                        <MenuItem eventKey={3.4}><Link to="recipes">התחל עם RecipeIT!</Link></MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}><Link to="404">הגדרות</Link></MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    );
};

Header.propTypes = {
    //
};



export default Header;


