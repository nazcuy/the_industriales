import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../../common/CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/products', label: 'Productos' },
        { path: '/categories', label: 'Categorías' },
        { path: '/contact', label: 'Contacto' },
    ];

    return (
        <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg" 
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        >
        <Container>
            <Navbar.Brand as={Link} to="/">
            <img
                src="/logo.svg"
                width="40"
                height="40"
                className="d-inline-block align-top me-2"
                alt="TechShop Logo"
            />
            TechShop
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {navLinks.map((link) => (
                <Nav.Link 
                    key={link.path} 
                    as={Link} 
                    to={link.path}
                    onClick={() => setExpanded(false)}
                >
                    {link.label}
                </Nav.Link>
                ))}
            </Nav>
            <CartWidget itemCount={3} />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;