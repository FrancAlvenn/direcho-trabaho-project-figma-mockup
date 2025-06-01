const PriceRange = ({ event }) => {
  if (!event) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="border-2 flex items-center w-full max-w-full sm:max-w-[383px] h-auto sm:max-h-[88px] sm:h-full bg-[#1E1F22] rounded-[24px] box-border p-[24px]">
      <div className="text-[16px] text-left flex-grow text-white">
        <h3 className="font-bold text-[16px] text-white">Price range</h3>
        <p className="text-[12px] text-white mt-1">
          {event?.price_range ? (
            <span>
              {event.price_range.currency || "$"}
              {event.price_range.min?.toLocaleString?.() ?? "0"} -{" "}
              {event.price_range.max?.toLocaleString?.() ?? "0"}
            </span>
          ) : (
            <span>N/A</span>
          )}
        </p>
      </div>
      <button
        aria-label="Buy tickets"
        className="w-[100px] h-[40px] rounded-[50px] text-white bg-gradient-to-r from-[#C22026] via-[#C22026] to-[#C400CB] hover:opacity-90 transition"
      >
        Tickets
      </button>
    </div>
  );
};

export default PriceRange;
