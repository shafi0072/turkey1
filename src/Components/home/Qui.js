import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Videoimg from "../../assets/images/Group 8.png";

export default function Qui() {
  return (
    <div className="quisection">
      <Box my={30} className="quimargn">
        <Container>
          <Grid container>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Typography variant="h2" gutterBottom>
                QUI NOUS SOMMES
              </Typography>
              <div className="greenbottom"></div>
              <Typography variant="h6" gutterBottom>
                Mekanisk se distingue par son service professionnel et
                personnalisé en conception et impression 3D, vous permettant
                d'obtenir les pièces industrielles et fonctionnelles requises
                pour vos projets.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Passionnés par les projets de développement de produits en tout
                genre, nous pouvons vous supporter de la phase conceptuelle
                jusqu’à la production de votre produit.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Que vous souhaitiez{" "}
                <span className="font-f-sm"> valider votre concept </span>{" "}
                préliminaire auprès de clients potentiels,{" "}
                <span className="font-f-sm">
                  réduire vos coûts ou votre « time to market », valider
                  l'ergonomie{" "}
                </span>{" "}
                de votre conception, ou{" "}
                <span className="font-f-sm">confirmer la faisabilité </span> de
                votre projet, nous pouvons vous aider à profiter des solutions
                innovantes disponibles. Si nous n'avons pas la technologie dont
                vous avez besoin, vous pouvez{" "}
                <span className="font-f-sm"> profitez de nos </span> contacts
                avec nos fournisseurs de confiance, tout en respectant vos coûts
                et échéanciers!
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box textAlign="center">
                <img src={Videoimg} width="80%" height="auto" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
