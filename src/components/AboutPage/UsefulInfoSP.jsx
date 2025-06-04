import { Card, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMasksTheater,
  faGlobe,
  faPeopleGroup,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Details = ({ icon, text }) => (
  <div className="flex items-center mb-4 border-b border-black pb-4 w-full text-sm sm:text-base">
    <span className="px-4 sm:px-6">{icon}</span>
    <span className="px-2 break-all">{text}</span>
  </div>
);

const icon = [
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faEnvelope,
];

const Socials = () => (
  <div className="flex gap-4 sm:gap-6 mt-4 px-4 flex-wrap">
    {icon.map((icon, idx) => (
      <div
        key={idx}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-black hover:bg-[#87CEEB] transition-colors duration-200"
      >
        <FontAwesomeIcon icon={icon} size="lg" className="text-white" />
      </div>
    ))}
  </div>
);


const UsefulInfoSP = ({ event }) => {
  if (!event) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <Card
      className="w-full"
      sx={{
        backgroundColor: "#1E1F22",
        maxWidth: { xs: "100%", md: "386px" },
        width: "100%",
        maxHeight: { xs: "none", md: "381px" },
        height: { xs: "auto", md: "100%" },
        borderRadius: "24px",
        padding: "14px 0px",
        marginTop: { xs: "16px", md: "24px", lg: "24px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardContent sx={{ color: "#FFFFFF", px: 0, py: 0, width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            borderBottom: "1px solid #000000",
            paddingBottom: "8px",
            width: "100%",
            px: 3,
            py: 1,
            fontSize: "24px",
          }}
        >
          Useful info
        </Typography>
        <Details
          icon={<FontAwesomeIcon icon={faMasksTheater} size="xl" />}
          text={event.useful_info?.type_of_event}
        />
        <Details
          icon={<FontAwesomeIcon icon={faLocationDot} size="xl" />}
          text={event.useful_info?.theatre}
        />
        <Details
          icon={<FontAwesomeIcon icon={faGlobe} size="xl" />}
          text={
            <a
              href={event.useful_info?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9EB7D4] transition-colors duration-200"
            >
              {event.useful_info?.website}
            </a>
          }
        />
        <Details
          icon={<FontAwesomeIcon icon={faPeopleGroup} size="xl" />}
          text={event.useful_info.age_appropriate}
        />
        <Socials />
      </CardContent>
    </Card>
  );
};

export default UsefulInfoSP;
