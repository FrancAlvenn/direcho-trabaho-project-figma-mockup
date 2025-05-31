import React from "react";
import "./App.css";
import logo from "./logo.svg";
import EventDetailPage from "./components/EventDetail/EventDetailPage";
import AboutSection from './components/AboutPage/About.jsx';
import EventsContainer from './components/EventsCard/EventsContainer';
import HomePage from "./pages/HomePage";
import EventViewPage from "./pages/EventViewPage";

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <EventViewPage/> */}
      {/* <EventDetailPage /> */}
      {/* <AboutSection/> */}
    </div>
  );
}

export default App;
