import React from 'react';
import NavBar from './UI/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SoundPage from './Page/SoundPage';
import DetectPage from './Page/DetectPage';
import AboutPage from './Page/AboutPage';
import Test from './Page/Test';

const App = () => {
  var rootStyle = {
    color: 'white',
    height: '100%',
  };

  return (
    <div style={rootStyle}>
      <Router>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <main>
          <Switch>
            <Route path="/" exact component={SoundPage} />
            <Route path="/detect" exact component={DetectPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/test" exact component={Test} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
