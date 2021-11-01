import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";

export default function Liver() {
  return (
    <div>
      <Box my={10}>
        <div className="Liver">
          <Container>
            <Typography variant="h2" textAlign="center" gutterBottom>
              <span className="greenbottom">Livr</span>aison
            </Typography>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Nos colis sont préparés avec le plus grand soin. Recevez vos
              pièces par livraison express partout au canada. Nous expédions
              également à l'international.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="Contactez-btn"
            >
              {" "}
              Contactez-nous{" "}
            </Button>
          </Container>
        </div>
      </Box>
    </div>
  );
}
