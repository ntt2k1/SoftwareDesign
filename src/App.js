import React from 'react';
import SoundList from './components/SoundList';
import NavBar from './UI/NavBar';
import './App.css';

const App = () => {
  var rootStyle = {
    backgroundColor: '#5ce5b4',
    color: 'white',
    height: '100%',
  };

  return (
    <div style={rootStyle}>
      <NavBar />
      <br />
      <br />
      <SoundList />
    </div>
  );
};

export default App;
