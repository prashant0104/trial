import './App.css';
import Routes from './container/Route/route';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">DHRUVA ENTERPRISSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">Home page</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About page</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Prashant
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes />

    </BrowserRouter>
  );
}

export default App;
