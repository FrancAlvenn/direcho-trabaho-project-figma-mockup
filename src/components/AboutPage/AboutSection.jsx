import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Tag = ({ text }) => (
  <span className="flex items-center justify-center min-w-[90px] px-3 max-w-[200px] h-[32px] text-[14px] text-white bg-[#C2202629] rounded-full border border-[#C22026] backdrop-blur-[16px] hover:bg-[#e4e4e8] hover:text-[#000000] transition-colors duration-200">
    {text}
  </span>
);

const AboutSection = ({ event }) => {
  if (!event) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="col-span-full text-left text-[40px] font-bold text-white">
        {event.title}
      </h1>

      <p className="flex col-span-full gap-2 text-left text-[16px] text-white ">
        <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "22px" }} />
        {event.location}
      </p>

      <p className="col-span-full text-left text-[16px] text-white ">
        {event.date_range?.start} - {event.date_range?.end}
      </p>

      <div className="flex gap-2 flex-wrap">
        {event.tags?.map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </div>

      <h3 className="col-span-full text-left font-bold text-[24px] text-white">
        About the event
      </h3>
      <p className="col-span-full text-left text-[16px] text-white max-w-full sm:max-w-[687px]">
        {event.about}
      </p>

      <h3 className="col-span-full text-left font-bold text-[20px] text-white">
        Vibe
      </h3>
      <div className="flex gap-2 flex-wrap ">
        {event.vibe?.map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </div>

      <h3 className="col-span-full text-left font-bold text-[24px] text-white">
        Similar to these Netflix shows
      </h3>
      <ul className="mt-2 list-disc pl-5 text-left text-[16px] text-white hover:text-[#9EB7D4] transition-colors duration-200">
        {event.similar_events?.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>

      <h3 className="col-span-full text-left font-bold text-[24px] text-white">
        Artists
      </h3>

      <div className="flex flex-wrap gap-3 max-w-[691px] max-h-[351px]">
        {event.artists?.map((artist, idx) => {
          return (
            <span key={idx}>
              <img
                src={artist.image}
                alt={artist.name}
                className="w-[157px] h-[141px] object-cover border-2 rounded-t-[16px]"
              />
              <p className="w-[157px] h-[44px] bg-[#1e1f22] text-white text-center flex items-center justify-center rounded-b-[16px]">
                {artist.name}
              </p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
