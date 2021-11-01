import React from "react";
import { Typography, Box, Button } from "@mui/material";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <Typography
          variant="h1"
          textAlign="center"
          gutterBottom
          component="div"
        >
          Bienvenue chez The Shark 3D
        </Typography>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Services de conception et de fabrication additive Impression <br />
          3D industrielle
        </Typography>
        <Button variant="contained" color="primary">
          {" "}
          Soumission{" "}
        </Button>
      </div>
    </>
  );
}
