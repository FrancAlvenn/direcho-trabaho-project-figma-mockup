import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../../services/events.service";
import UsefulInfoSP from "./UsefulInfoSP";
import PriceRange from "./PriceRange";
import AboutSection from "./AboutSection";

const About = () => {
  const { event_id } = useParams(); 
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        const selectedEvent = data.find((e) => e.id === event_id);
        setEvent(selectedEvent);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, [event_id]);

  if (!event) {
    return <div className="text-white p-6">Loading or Event Not Found</div>;
  }

  return (
    <div className="flex bg-black w-full h-[1440px] min-h-screen mx-auto font-sans">
      <div
        className="events-container flex flex-wrap justify-between pb-10 pt-10 bg-black bg-cover bg-center w-full h-[600px]"
        style={{ backgroundImage: `url(${event.card_image})` }}
      >
        <div className="flex flex-col w-full lg:w-2/3 px-4 sm:px-8 md:px-[120px] mt-[16px] sm:mt-[8%] md:mt-[10%] lg:mt-[12%]">
          <AboutSection event={event} />
        </div>
        <div className="flex flex-col w-full lg:w-1/3 px-4 sm:px-8 md:pr-[120px] mt-[16px] sm:mt-[8%] md:mt-[10%] lg:mt-[12%] gap-6">
          <PriceRange event={event} />
          <UsefulInfoSP event={event} />
        </div>
      </div>
    </div>
  );
};

export default About;
