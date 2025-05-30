import { TicketIcon } from "@phosphor-icons/react";

const EventCard = ({event}) => {
    return (
        <div className="event-card">
            <ul>
                <div
                    className="relative rounded-2xl overflow-hidden shadow-md w-[282px] h-[482px] bg-[#1E1F22] text-white"
                >
                    <img
                        src="https://placehold.co/600x400"
                        alt={event.title}
                        className="w-[282px] h-[207px] object-cover"
                    />

                    <div className="p-4 ">
                        <h3 className="text-lg font-bold text-left">{event.title}</h3>
                        <p className="text-[14px] text-left opacity-60">{event.location}</p>
                        <p className="text-sm mt-2 text-left opacity-60">{event.about}</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0  top-1/2 border-t border-dashed border-black border-2 opacity-50"></div>
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black"></div>
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black"></div>
                    </div>

                    <div className="px-4 py-3">
                        <div className="flex justify-center items-center text-sm gap-2">
                            <TicketIcon size={22} />
                            <p className='opacity-60'>Get tickets starting at</p>
                        </div>
                        <div className="flex justify-around mt-3">
                        <div className="text-center">
                            <h4 className="text-[20px] font-bold">${event.standard_pricing.Member.price}</h4>
                            <p className="text-[10px]">Member</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-[20px] font-bold">${event.standard_pricing.Standard.price}</h4>
                            <p className="text-[10px]">Standard</p>
                        </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default EventCard;
