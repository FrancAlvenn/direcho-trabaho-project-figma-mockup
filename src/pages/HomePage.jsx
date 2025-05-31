import EventDetailPage from "../components/EventDetail/EventDetailPage";
import EventsContainer from "../components/EventsCard/EventsContainer";
import Navbar from "../components/Navbar";


const HomePage = () => {
  return (
    <div className="bg-black pb-10 pt-10">
        <Navbar />
        <div className="px-20">
            <EventDetailPage />
        </div>
        <EventsContainer title={"Upcoming Events"}/>
    </div>
  );
}

export default HomePage;