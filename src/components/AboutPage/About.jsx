import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../../services/events.service";
import UsefulInfoSP from "./UsefulInfoSP";
import PriceRange from "./PriceRange";
import AboutSection from "./AboutSection";
import { Box, Card } from "@mui/material";

const About = () => {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        const selectedEvent = data.find((e) => e.id === event_id);
        setEvent(selectedEvent);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, [event_id]);

  if (!event) {
    return <Box color="white" p={3}>Loading or Event Not Found</Box>;
  }

  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "100%",
        minHeight: "100vh",
        pb: 6,
        mb: 5,
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Card
        sx={{
          height: 600,
          backgroundImage: `url(${event.card_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "black",
          borderRadius: 0,
          boxShadow: "none",
          width: "100%",
        }}
        square
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 15 },
          mt: "-324px",
          gap: 4,
        }}
      >
        <Box sx={{ flex: "1 1 65%", minWidth: 0 }}>
          <AboutSection event={event} />
        </Box>
        <Box
          sx={{
            flex: "1 1 30%",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <PriceRange event={event} />
          <UsefulInfoSP event={event} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
