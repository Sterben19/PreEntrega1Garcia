import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from 'react-router-dom';

function OffcanvasExample() {
  const thirdNavbar = [false, 'sm', 'md', 'lg', 'xl', 'xxl'][2];

  return (
    <>
      <Navbar key={thirdNavbar} expand={thirdNavbar} className="bg-body-tertiary mb-3 justify-content-between">
        <Container fluid>
          <Navbar.Brand href="#">El Mundo De Tulia</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${thirdNavbar}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${thirdNavbar}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${thirdNavbar}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${thirdNavbar}`}>
                El Mundo De Tulia
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/category/amigurumis" className="nav-link">Amigurumis</NavLink>
              <NavLink to="/category/amigurumis" className="nav-link">Amigurumis</NavLink>
                <NavLink to="/category/manualidades" className="nav-link">Manualidades</NavLink>
                <NavDropdown
                  title="Productos"
                  id={`offcanvasNavbarDropdown-expand-${thirdNavbar}`}
                >
                  <NavDropdown.Item href="#action4">Redes sociales</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Encargos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Nuestra Historia 
                  </NavDropdown.Item>

                </NavDropdown>
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form> 
              <div className='ms-auto'>
              <CartWidget />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
