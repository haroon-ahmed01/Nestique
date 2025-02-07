import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/hero-image.jpg";

const HeroSection = () => {
  return (
    <>
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        margin: "20px",
      }}
    >
      <Box>
        <Typography variant="h2" fontWeight="bold">
          Discover the Latest Trends
        </Typography>
        <Typography variant="h6" mt={2}>
          Shop the best fashion & accessories at unbeatable prices!
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Box>
    </Box>

</>
  );
};

export default HeroSection;
