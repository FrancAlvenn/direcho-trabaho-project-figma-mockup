import { Chip } from "@mui/material";

const EventTags = ({ tags }) => (
  <div className="flex gap-2 mb-6 flex-wrap">
    {tags.map((tag, i) => (
      <Chip
        key={i}
        label={tag}
        variant="outlined"
        sx={{
          backgroundColor: "#C2202629",
          borderColor: "#C22026",
          color: "#fff",
          fontWeight: 500,
          fontSize: { xs: "0.8rem", sm: "1rem" },
          height: { xs: 30, sm: 40 },
          borderRadius: "20px",
          px: 1,
          py: 1,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />
    ))}
  </div>
);

export default EventTags;
