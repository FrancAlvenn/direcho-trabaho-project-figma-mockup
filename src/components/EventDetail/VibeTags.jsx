import { Chip } from "@mui/material";

const VibeTags = ({ tags }) => (
  <div className="flex flex-col gap-2 flex-wrap mb-4">
    <span className="font-semibold text-base sm:text-lg md:text-xl mb-1">
      Vibe
    </span>
    <div className="flex gap-2 flex-wrap">
      {tags.map((vibe, i) => (
        <Chip
          key={i}
          label={vibe}
          variant="outlined"
          sx={{
            backgroundColor: "#C2202629",
            borderColor: "#C22026",
            color: "#fff",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            height: { xs: 30, sm: 40 },
            fontWeight: 700,
            borderRadius: "20px",
            px: 2.5,
            py: 1,
          }}
        />
      ))}
    </div>
  </div>
);

export default VibeTags;
