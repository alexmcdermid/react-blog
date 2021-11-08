import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About'
import { Container, Nav, Navbar } from 'react-bootstrap';

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
        <Navbar bg="light" expand="lg">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              {/* Change to react bootstrap syntax
              <Link to='/about'>About    </Link>
              <Link to='/skills'>Skills    </Link>
              <Link to='/portfolio'>Portfolio   </Link> */}
            </Nav>
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
        <h3>Some form on everypage for contact</h3>
        <form>
          <label>
            <span>
                Name
            </span>
            <input
            name="name"
            value={this.state.name}
            onChange={this.handleFormChange}/>    
          </label>
          <br/>
          <label>
            <span>
                Email
            </span>
            <input
            name="email"
            value={this.state.email}
            onChange={this.handleFormChange}/>    
          </label>
          <br/>
          <label>
            <span>
                Message
            </span>
            <input
            name="message"
            value={this.state.message}
            onChange={this.handleFormChange}/>    
          </label>
          <br/>
          <button onClick={this.handleFormSubmit}>Send</button>
          </form>
      </div>
    );
  }
}

export default App;