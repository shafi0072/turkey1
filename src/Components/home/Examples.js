import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Setting from "../../assets/images/Group 1406.png";
import rotation from "../../assets/images/rotation.png";
import maquetee from "../../assets/images/Group 1329.png";
import cogwheels from "../../assets/images/cogwheels.png";
import machine from "../../assets/images/Group 1330.png";

export default function Examples() {
  return (
    <div className="examples">
      <Container>
        <Typography variant="h2" textAlign="center" gutterBottom>
          <span className="greenbottom">Exemp</span>les d'application
        </Typography>
        <Box my={5}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={Setting} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Composants mécaniques
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Pièces robustes renforcées de fibres composites (produits
                    Markforged) Matériaux ESD (décharge électrostatique)
                    Matériaux FR « flame resistant »
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={rotation} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    remplacement
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Remplacement de pièces en rupture de stock Pièces pour
                    réparation Pièces de rechange
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={maquetee} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Maquette{" "}
                    <span className="prsentation"> de présentation </span>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Projet d’architecture preuve de concept Marketing
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={maquetee} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Prototypes fonctionnels
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Pièces ou assemblages pour des tests fonctionnels,
                    ergonomiques ou des preuves de concept
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={maquetee} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Production
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Outillage / Gabarits Outillage pour atelier de production
                    Gabarit d’inspection, de production ou de test Outillage
                    personnalisé / adapté pour atelier d’artisanat
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={3} xs={3}>
                  <img src={maquetee} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Projets <span className="prsentation"> spéciaux </span>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Projet personnel ou professionnel Projet étudiant
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
            <Grid item lg={6} md={8} sm={8} xs={12}>
              {/* inner gridsystem start */}
              <Grid container>
                <Grid item lg={2} md={2} sm={2} xs={3}>
                  <img src={maquetee} width="51px" height="51px" />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={9}>
                  <Typography variant="h5" gutterBottom>
                    Petites séries de production (+1 000)
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Pré-production de pièces destinées à l’injection plastiques
                    Production de pièces où l’achat de moules est difficilement
                    justifiable Grande flexibilité sur la quantité de pièces
                    commandées à chaque commande / livraisons progressives
                  </Typography>
                </Grid>
              </Grid>
              {/* inner gridsystem end */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
