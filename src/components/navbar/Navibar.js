import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import {Link} from 'react-router-dom';
import './navbar.css';


export function NaviBar() {
    return (
    <>
            <Navbar className="header container-fluid" collapseOnSelect expand="lg" variant="dark">
                <NavbarBrand>Orbit Bot</NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <NavbarCollapse className="header__nav" id="responsive-navbar-nav">
                <Nav className="header__nav__right">
                        <NavLink><Link className="nav__link__simple"to="/">Main</Link></NavLink>
                        <NavLink><Link className="nav__link__simple" to="/coins">Prices</Link></NavLink>
                        <NavLink><Link className="nav__link__simple" to="/about">About</Link></NavLink>
                        <NavLink><Link  className=" nav__link__enter">LogIn</Link></NavLink>
                        <NavLink><Link  className="nav__link__out">Sign Up</Link></NavLink>
              </Nav>
                </NavbarCollapse>
            </Navbar>
    </>
    )
}