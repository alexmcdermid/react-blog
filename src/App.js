import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About'
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    name:"",
    email:"",
    message:"",
  }
  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg" className='navbar'>
          <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              {/* Change to react bootstrap syntax
              <Link to='/about'>About    </Link>
              <Link to='/skills'>Skills    </Link>
              <Link to='/portfolio'>Portfolio   </Link> */}
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
        <Route path='/about' render={(props) => (
            <About {...props}/>
          )}/>
        <Route path='/skills' render={(props) => (
            <Skills {...props}/>
          )}/>
        <Route path='/portfolio' render={(props) => (
            <Portfolio {...props}/>
          )}/>
         
          <Redirect to="/about" />
        </Switch>
        {/* might add this to a seperate page at some point */}
        <div className='formContainer'>
        <Form className='form'>
        <h4>Contact</h4>
          <Form.Group className='formGroup'>
            <Form.Label>Name</Form.Label>
            <Form.Control  
            name="name"
            placeholder="What is your name?"
            value={this.state.name}
            onChange={this.handleFormChange}/>
          </Form.Group>
          <Form.Group className='formGroup'>
            <Form.Label>Email</Form.Label>
            <Form.Control  
            name="email"
            placeholder="xxyyxx@xmail.com"
            value={this.state.email}
            onChange={this.handleFormChange}/>
          </Form.Group>
          <Form.Group className='formGroup'>
            <Form.Label>Message</Form.Label>
            <Form.Control  
            name="message"
            placeholder="What is your message to me?"
            value={this.state.message}
            onChange={this.handleFormChange}/>
          </Form.Group>
          <Button onClick={this.handleFormSubmit}>Send</Button>
          </Form>
          </div>
      </div>
    );
  }
}

export default App;