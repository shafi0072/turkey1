import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Circle from "../../assets/images/Group 6826.png";
import Check from "../../assets/images/Icon awesome-check-circle.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Computer from "../../assets/images/Group 1271.png";
import chaqoor from "../../assets/images/Group 2202.png";

export default function Pme() {
  return (
    <div className="Pmesection">
      <img src={Circle} width="252px" height="151px" className="circle" />
      <Container>
        <Typography variant="h2" textAlign="center" gutterBottom>
          <span className="greenbottom">PME ou </span>« start up » ?
        </Typography>
        <Box my={10} className="pmg-setting">
          <Grid container justifyContent="center">
            <Grid item lg={6} md={10} sm={11} xs={12}>
              <Typography variant="h5" gutterBottom>
                Bénéficiez d'un accompagnement personnalisé pour sélectionner la
                stratégie de conception et de fabrication la plus avantageuse
                selon vos besoins!
              </Typography>
              <Typography variant="h5" gutterBottom>
                Réduisez vos coûts de fabrication, les délais de livraison et le
                temps d'assemblage en:
              </Typography>
              <FormControlLabel
                control={<img src={Check} width="22px" height="22px" />}
                label={
                  <Typography
                    variant="h5"
                    className="Remplacement "
                    gutterBottom
                  >
                    Remplacement d'une pièce usinée par une pièce imprimée
                    (remplacement direct de pièce)
                  </Typography>
                }
              />
              <FormControlLabel
                control={<img src={Check} width="22px" height="22px" />}
                label={
                  <Typography
                    variant="h5"
                    className="Remplacement "
                    gutterBottom
                  >
                    Adapter votre conception pour inclure des pièces imprimées
                    (Adapt for Additive Manufacturing - AfAM)
                  </Typography>
                }
              />
              <FormControlLabel
                control={<img src={Check} width="22px" height="22px" />}
                label={
                  <Typography
                    variant="h5"
                    className="Remplacement "
                    gutterBottom
                  >
                    Conception et optimisation de vos pièces pour la fabrication
                    additive (Design for Additive Manufacturing - DfAM)
                  </Typography>
                }
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box textAlign="center">
                <img
                  src={Computer}
                  width="500px"
                  height="483px"
                  className="computer"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box textAlign="right" marginBottom="50px">
        <img src={chaqoor} width="178px" height="179px" />
      </Box>
    </div>
  );
}
