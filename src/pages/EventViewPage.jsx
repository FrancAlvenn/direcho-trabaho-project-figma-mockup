import { useParams } from "react-router";
import AboutSection from "../components/AboutPage/About";
import EventsContainer from "../components/EventsCard/EventsContainer";
import Navbar from "../components/Navbar";


const EventViewPage = () => {
  const eventId = useParams().event_id;

  return (
    <div className="bg-black pb-10 pt-10">
        <Navbar />
        <AboutSection/>
        <EventsContainer title="More like this"/>
    </div>
  );
}

export default EventViewPage;