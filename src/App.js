import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Home from './Home';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="twinkling">
        <Route exact path="/" render={(routerProps) => <Welcome {...routerProps} />} />
        <Route exact path="/home" render={(routerProps) => <Home {...routerProps} />} />
      </div>
    </div>
  );
}

export default App;
