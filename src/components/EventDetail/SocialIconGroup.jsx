import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";

const icons = [
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faEnvelopeRegular,
];

const SocialIconGroup = () => (
  <div className="flex gap-3 sm:gap-4 mt-4 px-2 sm:px-6 flex-wrap">
    {icons.map((icon, idx) => (
      <div
        key={idx}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-black hover:bg-[#BF1B57] transition-colors duration-200"
      >
        <FontAwesomeIcon icon={icon} size="lg" className="text-white" />
      </div>
    ))}
  </div>
);

export default SocialIconGroup;
