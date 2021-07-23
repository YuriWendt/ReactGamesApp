import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.styles.css';


export function Header () {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
            React Games App 
            </Navbar.Brand>
          </Container>
        </Navbar>
      </> 
    );
  }