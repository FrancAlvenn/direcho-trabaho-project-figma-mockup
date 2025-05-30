import React from "react";
import logo from "./logo.svg";
import EventDetailPage from "./components/EventDetail/EventDetailPage";

import AboutSection from './components/AboutPage/About.jsx';
import EventsContainer from './components/EventsCard/EventsContainer';

function App() {
  return (
    <div className="App">
      <EventDetailPage />
      <AboutSection/>
      {/* <EventsContainer /> */}
    </div>
  );
}

export default App;
