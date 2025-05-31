import { useEffect, useState } from "react";
import { getEvents } from "../../services/events.service";
import {
  MapPin,
  Globe,
  MaskHappy,
  Person,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  XLogo,
  Envelope,
} from "@phosphor-icons/react";

const UsefulInfoSP = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvent(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-full sm:max-w-[386px] h-auto sm:max-h-[381px] sm:h-full bg-[#1E1F22] rounded-[24px] box-border flex flex-col justify-start">
      <div className="text-white px-0">
        <h3 className="flex items-center border-b border-black py-[17px] pl-[24px] w-full gap-2 text-left font-bold text-[24px] text-white">
          Useful info
        </h3>

        {event.useful_info?.type_of_event && (
          <p className="flex items-center border-b border-black py-[17px] pl-[24px] w-full text-sm sm:text-base gap-2 hover:text-[#9EB7D4] transition-colors duration-200">
            <MaskHappy size={22} />
            {event.useful_info.type_of_event}
          </p>
        )}

        {event.useful_info?.theatre && (
          <p className="flex items-center border-b border-black py-[17px] pl-[24px] w-full text-sm sm:text-base gap-2 hover:text-[#9EB7D4] transition-colors duration-200">
            <MapPin size={22} />
            {event.useful_info.theatre}
          </p>
        )}

        {event.useful_info?.website && (
          <a
            href={event.useful_info.website}
            className="flex items-center border-b border-black py-[17px] pl-[24px] w-full text-sm sm:text-base gap-2 hover:text-[#9EB7D4] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={22} />
            {event.useful_info.website}
          </a>
        )}

        {event.useful_info?.age_appropriate && (
          <p className="flex items-center border-b border-black py-[17px] pl-[24px] w-full text-sm sm:text-base gap-2 hover:text-[#9EB7D4] transition-colors duration-200">
            <Person size={22} />
            {event.useful_info.age_appropriate}
          </p>
        )}

        {/* Social Media Icons */}
        <div className="flex gap-3 sm:gap-4 mt-4 px-2 sm:px-6 flex-wrap">
          <div className="w-[48px] h-[48px] flex items-center justify-center text-white rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200">
            <FacebookLogo size={24} />
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center text-white rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200">
            <InstagramLogo size={24} />
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center text-white rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200">
            <YoutubeLogo size={24} />
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center text-white rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200">
            <XLogo size={24} />
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center text-white rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200">
            <Envelope size={24} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default UsefulInfoSP;
