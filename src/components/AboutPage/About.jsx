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
      className=" flex   bg-black"
      style={{
        background: "black",
        height: "1897px",
        maxWidth: "100%",
        margin: "0 auto",
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      <div
        className="events-container flex  bg-black pb-10 pt-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "600px",
          width: "100%",
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        <div className="flex flex-col space-y-4 pl-[120px] mt-[276px]">
          <h1 className="col-span-full text-left text-[40px] font-bold text-white">
            {event.title}
          </h1>
          <p className="flex col-span-full text-left text-[16px] text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="#FFFFFF"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            {event.location}
          </p>
          <p className="col-span-full text-left text-[16px] text-white ">
            {event.date_range.start} - {event.date_range.end}
          </p>
          <div className="flex gap-x-2 ">
            {event.tags.map((tag, idx) => (
              <span
                key={idx}
                className="
                  flex items-center justify-center w-[90px] h-[32px] text-sm text-white text-[14px] bg-[#C2202629] rounded-[50px]  border border-[#C22026] backdrop-blur-[16px]"
              >
                {tag}
              </span>
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
          <div className="flex gap-x-2">
            {event.vibe.map((tag, idx) => (
              <span
                key={idx}
                className="
                  flex items-center justify-center w-[90px] h-[32px] text-sm text-white text-[14px] bg-[#C2202629] rounded-[50px] border border-[#C22026] backdrop-blur-[16px]"
              >
                {tag}
              </span>
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
                    img
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
          {/* <div className="flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="#FFFFFF"
              viewBox="0 0 640 512"
            >
              <path d="M74.6 373.2c41.7 36.1 108 82.5 166.1 73.7c6.1-.9 12.1-2.5 18-4.5c-9.2-12.3-17.3-24.4-24.2-35.4c-21.9-35-28.8-75.2-25.9-113.6c-20.6 4.1-39.2 13-54.7 25.4c-6.5 5.2-16.3 1.3-14.8-7c6.4-33.5 33-60.9 68.2-66.3c2.6-.4 5.3-.7 7.9-.8l19.4-131.3c2-13.8 8-32.7 25-45.9C278.2 53.2 310.5 37 363.2 32.2c-.8-.7-1.6-1.4-2.4-2.1C340.6 14.5 288.4-11.5 175.7 5.6S20.5 63 5.7 83.9C0 91.9-.8 102 .6 111.8L24.8 276.1c5.5 37.3 21.5 72.6 49.8 97.2zm87.7-219.6c4.4-3.1 10.8-2 11.8 3.3c.1 .5 .2 1.1 .3 1.6c3.2 21.8-11.6 42-33.1 45.3s-41.5-11.8-44.7-33.5c-.1-.5-.1-1.1-.2-1.6c-.6-5.4 5.2-8.4 10.3-6.7c9 3 18.8 3.9 28.7 2.4s19.1-5.3 26.8-10.8zM261.6 390c29.4 46.9 79.5 110.9 137.6 119.7s124.5-37.5 166.1-73.7c28.3-24.5 44.3-59.8 49.8-97.2l24.2-164.3c1.4-9.8 .6-19.9-5.1-27.9c-14.8-20.9-57.3-61.2-170-78.3S299.4 77.2 279.2 92.8c-7.8 6-11.5 15.4-12.9 25.2L242.1 282.3c-5.5 37.3-.4 75.8 19.6 107.7zM404.5 235.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6c-1 5.3-7.4 6.4-11.8 3.3zm136.2 15.5c-1 5.3-7.4 6.4-11.8 3.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6zM530 350.2c-19.6 44.7-66.8 72.5-116.8 64.9s-87.1-48.2-93-96.7c-1-8.3 8.9-12.1 15.2-6.7c23.9 20.8 53.6 35.3 87 40.3s66.1 .1 94.9-12.8c7.6-3.4 16 3.2 12.6 10.9z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="#FFFFFF"
              viewBox="0 0 256 256"
            >
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="#FFFFFF"
              viewBox="0 0 256 256"
            >
              <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="#FFFFFF"
              viewBox="0 0 640 512"
            >
              <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
