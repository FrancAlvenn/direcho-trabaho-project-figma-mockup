import EventTags from "./EventTags";
import AboutSection from "./AboutSection";
import VibeTags from "./VibeTags";
import EventInfoCard from "./EventInfoCard";

const EventDetailPage = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-12 flex flex-col lg:flex-row gap-6 md:gap-8 open-sans-normal min-h-screen">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 open-sans-bold">
          San Francisco Symphony
        </h1>
        <EventTags tags={["Symphony", "Concerts"]} />
        <AboutSection />
        <VibeTags tags={["Chill", "Upbeat", "Funny", "Playful"]} />
      </div>
      <div className="w-full md:w-[384px] flex-shrink-0 mr-6">
        <EventInfoCard />
      </div>
    </div>
  );
};

export default EventDetailPage;
