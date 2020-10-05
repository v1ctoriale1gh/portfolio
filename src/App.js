import React from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeLinks from './Components/Link'


function App() {
  return (
    <div className="App">
      <div className="twinkling">
        <Route exact path="/portfolio"><Welcome makeLinks={makeLinks} /></Route>
        <Route exact path="/portfolio/about"><About makeLinks={makeLinks}/></Route>
        <Route exact path="/portfolio/contact"><Contact makeLinks={makeLinks}/></Route>
        <Route exact path="/portfolio/projects"><Projects makeLinks={makeLinks}/></Route>
      </div>
    </div>
  );
}

export default App;
