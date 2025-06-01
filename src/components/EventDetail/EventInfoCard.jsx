import { Card, CardContent, Typography } from "@mui/material";
import ContactItem from "./ContactItem";
import SocialIconGroup from "./SocialIconGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const EventInfoCard = () => (
  <Card
    className="w-full"
    sx={{
      backgroundColor: "#1E1F22",
      maxWidth: { xs: "100%", md: "384px" },
      width: "100%",
      maxHeight: { xs: "none", md: "325px" },
      height: { xs: "auto", md: "100%" },
      borderRadius: "24px",
      padding: "14px 0px",
      marginTop: { xs: "16px", md: "8%", lg: "45%" },
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <CardContent sx={{ color: "#FFFFFF", px: 0 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          borderBottom: "1px solid #000",
          paddingBottom: "8px",
          width: "100%",
          px: 3,
        }}
      >
        Useful info
      </Typography>

      <ContactItem
        icon={<FontAwesomeIcon icon={faPhone} size="lg" />}
        text="1-415-756-3453"
      />
      <ContactItem
        icon={<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />}
        text="201 Van Ness Ave, San Francisco, CA"
      />
      <ContactItem
        icon={<FontAwesomeIcon icon={faGlobe} size="lg" />}
        text="sfsymphony.org"
      />
      <SocialIconGroup />
    </CardContent>
  </Card>
);

export default EventInfoCard;
