import { useEffect, useState } from "react";
import { getEvents } from "../../services/events.service";
import bgImage from "../../assets/images/bom-2.png";

const AboutSection = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvents().then((data) => {
      setEvent(data[0]);
    });
  }, []);

  if (!event) return <div className="text-white">Loading...</div>;

  return (
    <div
      className="events-container flex justify-center items-center bg-black pb-10 pt-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "600px",
        maxWidth: "100%",
        margin: "0 auto", 
      }}
    >
      <div className="events-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <h1 className="col-span-full text-left text-[24px] font-bold text-white">
          {event.title}
        </h1>
        <div className="flex-1 text-left text-white">
          <p>{event.location}</p>
          <p>
            {event.date_range.start} - {event.date_range.end}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {event.tags.map((tag, idx) => (
              <span
                key={idx}
                className="
                  flex items-center justify-center
                  w-[90px] h-[32px]
                  text-sm text-white
                  bg-[#C2202629]
                  rounded-[50px]
                  border border-[#C22026]
                  backdrop-blur-[16px]
                "
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex-1 text-left text-white">
            <p>{event.about}</p>

            <h3 className="mt-6 font-semibold text-lg">Vibe</h3>

            {/* Vibe Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {event.vibe.map((tag, idx) => (
                <span
                  key={idx}
                  className="
                  flex items-center justify-center
                  w-[90px] h-[32px]
                  text-sm text-white
                  bg-[#C2202629]
                  rounded-[50px]
                  border border-[#C22026]
                  backdrop-blur-[16px]
                "
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-6 font-semibold text-lg">
              Similar to these Netflix shows
            </h3>
            <ul className="mt-2 list-disc list-inside text-white">
              {event.similar_events.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
