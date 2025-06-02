import { useParams } from "react-router";
import AboutSection from "../components/AboutPage/About";
import EventsContainer from "../components/EventsCard/EventsContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventViewPage = () => {
  const eventId = useParams().event_id;

  return (
    <div className="bg-black pb-10">
      <Navbar />
      <AboutSection />
      <EventsContainer title="More like this" />
      <Footer/>
    </div>
    
  );
};

export default EventViewPage;