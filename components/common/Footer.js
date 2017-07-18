import React, {PropTypes} from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from 'react-router';

const Footer = ({recipe}) => {
    return(
        <div className="footer">
            <div className="page-wrap">
                <h1>Footer Tryout</h1>
            </div>
        </div>
    );
};

Footer.propTypes = {
    //
};



export default Footer;


