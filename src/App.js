import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/about'>About    </Link>
        <Link to='/skills'>Skills    </Link>
        <Link to='/portfolio'>Portfolio</Link>
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
      </div>
    );
  }
}

export default App;