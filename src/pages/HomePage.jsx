import EventDetailPage from "../components/EventDetail/EventDetailPage";
import EventsContainer from "../components/EventsCard/EventsContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div
      className="pb-10 pt-10"
      style={{
        height: "600px",
        backgroundImage: "url('/assets/images/san_francisco_symphony.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="lg:px-20 pt-[60%] md:pt-[25%] lg:pt-[18%]">
        <EventDetailPage />
      </div>
      <EventsContainer title={"Upcoming Events"} />
      <Footer/>
    </div>
  );
};

export default HomePage;