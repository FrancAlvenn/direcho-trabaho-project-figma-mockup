import { useEffect, useRef, useState } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../../services/events.service";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const EventsContainer = () => {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
        getEvents().then((data) => {
            setEvents(data);
            setLoading(false);
        });
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-black pb-10 pt-10 px-38">
            {/* Header with buttons */}
            <div className="flex justify-between items-center mb-4 text-white">
                <h2 className="text-[24px] mb-2 font-bold">Upcoming Events</h2>
                <div className="flex gap-2">
                    <button
                        onClick={scrollLeft}
                        className="p-2 rounded-full bg-[#1E1F22] text-white hover:bg-[#333333] hover:text-white"
                    >
                        <CaretLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-2 rounded-full bg-[#1E1F22] text-white hover:bg-[#333333] hover:text-white"
                    >
                        <CaretRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Scrollable card container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-container"
            >
                {loading ? (
                    <p className="text-white">Loading events...</p>
                ) : events?.length === 0 ? (
                    <p className="text-white">No events available</p>
                ) : (
                    events.map((event) => (
                        <div key={event.id} className="flex-shrink-0 min-w-[282px]">
                            <EventCard event={event} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventsContainer;
