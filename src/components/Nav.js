import * as ReactBootStrap from 'react-bootstrap';

function Nav(){
    return(
        <ReactBootStrap.Navbar className= 'color-nav' collapseOnSelect expand="lg" bg="primary-red" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="/">Home</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link eventKey={2} href="/contact">
        Contact
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    )
}

export default Nav;