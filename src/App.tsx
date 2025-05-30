import React from 'react';
import logo from './logo.svg';
import './App.css';

import AboutSection from './components/AboutPage/About.jsx';
import EventsContainer from './components/EventsCard/EventsContainer';

function App() {
  return (
    <div className="App">
      <AboutSection/>
      <EventsContainer />
    </div>
  );
}

export default App;
