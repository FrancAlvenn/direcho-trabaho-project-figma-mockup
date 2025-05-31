const ContactItem = ({ icon, text }) => (
  <div className="flex items-center mb-5 border-b border-black pb-4 w-full text-sm sm:text-base">
    <span className="px-4 sm:px-6">{icon}</span>
    <span className="px-2 break-all">{text}</span>
  </div>
);

export default ContactItem;
