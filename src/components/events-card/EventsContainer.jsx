import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../../services/events.service";

const EventsContainer = () => {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEvents().then((data) => {
            setEvents(data);
            setLoading(false);
        });
    }, []);
    
    return (
        <div className="events-container flex justify-center items-center bg-black pb-10 pt-10">
            <div className="events-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <h2 className="col-span-full text-left text-[24px] font-bold text-white">Upcoming Events</h2>
                {loading ? (
                    <p className="col-span-full text-center">Loading events...</p>
                ) : events?.length === 0 ? (
                    <p className="col-span-full text-center">No events available</p>
                ) : (
                    events.map((event) => <EventCard key={event.id} event={event} />)
                )}
            </div>
        </div>
    );
};

export default EventsContainer;
