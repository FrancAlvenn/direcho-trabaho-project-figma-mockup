import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const PriceRange = ({ event }) => {
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
        borderRadius: "24px",
        marginTop: { xs: "16px", md: "8%", lg: "60%" },
        boxSizing: "border-box",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}
          >
            Price range
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#FFFFFF", mt: 1 }}>
            {event?.price_range ? (
              <>
                {event.price_range.currency || "$"}
                {event.price_range.min?.toLocaleString?.() ?? "0"} -{" "}
                {event.price_range.max?.toLocaleString?.() ?? "0"}
              </>
            ) : (
              "N/A"
            )}
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            width: "100px",
            height: "40px",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg, #C22026 0%, #C22026 50%, #C400CB 100%)",
            textTransform: "none",
            fontSize: "14px",
            color: "#fff",
            "&:hover": {
              opacity: 0.9,
              background:
                "linear-gradient(90deg, #C22026 0%, #C22026 50%, #C400CB 100%)",
            },
          }}
        >
          Tickets
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceRange;
