import AboutSection from "../components/AboutPage/About";
import EventsContainer from "../components/EventsCard/EventsContainer";
import Navbar from "../components/Navbar";


const EventViewPage = () => {
  return (
    <div className="bg-black pb-10 pt-10">
        <Navbar />
        <AboutSection />
        <EventsContainer title="More like this"/>
    </div>
  );
}

export default EventViewPage;