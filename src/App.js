import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
    

    </div >
  );
}

export default App;
