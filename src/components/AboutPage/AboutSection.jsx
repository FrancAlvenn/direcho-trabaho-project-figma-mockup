import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Tag = ({ text }) => (
  <Chip
    label={text}
    sx={{
      minWidth: 90,
      maxWidth: 200,
      height: 32,
      fontSize: 14,
      fontFamily: "'Open Sans', sans-serif",
      color: "white",
      backgroundColor: "#C2202629",
      border: "1px solid #C22026",
      backdropFilter: "blur(16px)",
      "&:hover": {
        backgroundColor: "#e4e4e8",
        color: "#000000",
      },
    }}
  />
);

const AboutSection = ({ event }) => {
  if (!event) {
    return <Typography sx={{ color: "#fff" }}>Loading...</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography
        variant="h2"
        sx={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}
      >
        {event.title}
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ fontSize: 22, color: "#fff" }}
        />
        <Typography sx={{ fontSize: 16, color: "#fff" }}>
          {event.location}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: 16, color: "#fff" }}>
        {event.date_range?.start} - {event.date_range?.end}
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={1}>
        {event.tags?.map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </Box>

      <Typography
        variant="h4"
        sx={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}
      >
        About the event
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          color: "#fff",
          maxWidth: { xs: "100%", sm: "687px" },
        }}
      >
        {event.about}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
      >
        Vibe
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {event.vibe?.map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </Box>

      <Typography
        variant="h4"
        sx={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}
      >
        Similar to these Netflix shows
      </Typography>
      <Box
        component="ul"
        sx={{
          mt: 2,
          
          color: "#fff",
          fontSize: 16,
          listStyleType: "disc",
          listStylePosition: "inside",
          
          margin: 0,
        }}
      >
        {event.similar_events?.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </Box>

      <Typography
        variant="h4"
        sx={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}
      >
        Artists
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        maxWidth={691}
        maxHeight={351}
      >
        {event.artists?.map((artist, idx) => (
          <Card
            key={idx}
            sx={{
              width: 157,
              borderRadius: 2,
              overflow: "visible",
              bgcolor: "transparent",
              boxShadow: "none",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={artist.image}
              alt={artist.name}
              sx={{
                width: "100%",
                height: 141,
                objectFit: "cover",
                border: "2px solid #000",
                borderRadius: "16px 16px 0 0",
              }}
            />
            <CardContent
              sx={{
                height: 44,
                width: "100%",
                backgroundColor: "#1e1f22",
                border: "2px solid #000",
                borderTop: "none",
                borderRadius: "0 0 16px 16px",
                display: "flex",
                alignItems: "center",
                mt: "-11px",
                p: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#fff",
                  fontWeight: 600,
                  textAlign: "left",
                  paddingLeft: "12px",
                  marginTop: "11px",
                  fontSize: 14,
                }}
              >
                {artist.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AboutSection;
