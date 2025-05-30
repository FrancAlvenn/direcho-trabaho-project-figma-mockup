import { useEffect, useState } from "react";
import { getEvents } from "../../services/events.service";
import bgImage from "../../assets/images/bom-2.png";
import { MapPin } from "@phosphor-icons/react";

const Tag = ({ text }) => (
  <span className="flex items-center justify-center w-[90px] h-[32px] text-[14px] text-white bg-[#C2202629] rounded-full border border-[#C22026] backdrop-blur-[16px]">
    {text}
  </span>
);

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
      className="flex flex-col bg-black w-full min-h-screen mx-auto font-sans"
      style={{ height: "1897px", width: "100%" }}
    >
      <div
        className="events-container flex pb-10 pt-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "600px",
          width: "100%",
        }}
      >
        {/* Price Range Box Positioned Absolutely */}
    <div className="absolute top-[494px] right-[120px] w-[383px] h-[88px] border-2 flex items-center justify-between p-4 bg-[#1e1f22] rounded-[24px]">
      <div className="text-[16px] text-left flex-grow text-white">
        <h3 className="font-bold text-[16px] text-white">Price range</h3>
        {event.price_range ? (
          <span>
            {event.price_range.currency}
            {"$"}
            {event.price_range.min.toLocaleString()} - {"$"}
            {event.price_range.max.toLocaleString()}
          </span>
        ) : (
          <span>N/A</span>
        )}
      </div>
      <button
        className="w-[100px] h-[40px] rounded-[50px] text-white hover:opacity-90 transition"
        style={{
          background:
            "linear-gradient(98.1deg, #C22026 -5.05%, #C400CB 101.49%)",
        }}
      >
        Tickets
      </button>
    </div>

        <div className="flex flex-col space-y-4 pl-[120px] mt-[276px]">
          <h1 className="col-span-full text-left text-[40px] font-bold text-white">
            {event.title}
          </h1>
          <p className="flex col-span-full text-left text-[16px] text-white ">
            <MapPin size={22} />
            {event.location}
          </p>
          <p className="col-span-full text-left text-[16px] text-white ">
            {event.date_range.start} - {event.date_range.end}
          </p>

          <div className="flex gap-2 flex-wrap">
            {event.tags.map((tag, idx) => (
              <Tag key={idx} text={tag} />
            ))}
          </div>

          <h3 className="col-span-full text-left font-bold text-[24px] text-white">
            About the event
          </h3>
          <p className="col-span-full text-left text-[16px] text-white w-[687px] h-[88px]">
            {event.about}
          </p>
          <h3 className="col-span-full text-left font-bold text-[20px] text-white">
            Vibe
          </h3>
          {/* Vibe Tags */}
          <div className="flex gap-2 flex-wrap">
            {event.vibe.map((tag, idx) => (
              <Tag key={idx} text={tag} />
            ))}
          </div>

          <h3 className="col-span-full text-left font-bold text-[24px] text-white">
            Similar to these Netflix shows
          </h3>
          <ul className="mt-2 list-disc pl-5 text-left text-[16px] text-white">
            {event.similar_events.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>

          <h3 className="col-span-full text-left font-bold text-[24px] text-white">
            Artists
          </h3>

          <div className="flex flex-wrap gap-3 max-w-[691px] max-h-[351px]">
            {event.artists.map((artist, idx) => {
              return (
                <span key={idx}>
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-[157px] h-[141px]  object-cover border-2 rounded-t-[16px]"
                  />
                  <p className="w-[157px] h-[44px] bg-[#1e1f22] text-white text-center flex items-center justify-center rounded-b-[16px]">
                    {artist.name}
                  </p>
                </span>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
