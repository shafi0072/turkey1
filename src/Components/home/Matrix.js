import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Circle from "../../assets/images/Lattice .png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Lattice from "../../assets/images/Lattice .png";
import Lattice2 from "../../assets/images/Lattice 02.png";
import Lattice3 from "../../assets/images/Lattice 03.png";
import Lattice4 from "../../assets/images/Lattice 04.png";
import Lattice5 from "../../assets/images/Lattice 05.png";
import Path from "../../assets/images/Path 5292.png";

export default function Matrix() {
  return (
    <div className="Matrix">
      <Container>
        <Typography variant="h2" textAlign="center" gutterBottom>
          <span className="greenbottom">Matér </span>iaux
        </Typography>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Bénéficiez d'un accompagnement personnalisé pour sélectionner la
          stratégie de conception et de fabrication la plus avantageuse selon
          vos besoins!
        </Typography>

        <Grid container justifyContent="center">
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: "355px",
                boxShadow: "none",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "34px",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Lattice}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ marginTop: "10px" }}
                >
                  <img src={Path} className="path-img" />
                  CFF (Continuous Filament Fabrication/ Markforged)
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ marginTop: "20px" }}
                >
                  Onyx (nylon renforcé de fibres de carbone), avec ou sans
                  renfort de fibres composites (fibre de verre de carbone,
                  carbone, kevlar)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: "355px",
                boxShadow: "none",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "34px",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Lattice2}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ marginTop: "10px", lineHeight: "33px" }}
                >
                  <img src={Path} className="path-img" />
                  Filaments (FFF / FDM) « standards »
                </Typography>
                <ul className="plamatrix">
                  <li>PLA, ABS, PETG, PC, nylon, etc.</li>
                  <li>Possibilité d'impression en 2 couleurs</li>
                  <li>Autres filaments sur demande</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: "355px",
                boxShadow: "none",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "34px",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Lattice3}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ marginTop: "10px" }}
                >
                  <img src={Path} className="path-img" />
                  Filaments (FFF / FDM) « spécialisés »
                </Typography>
                <ul className="plamatrix">
                  <li>PLA, ABS, PETG, PC, nylon, etc.</li>
                  <li>Possibilité d'impression en 2 couleurs</li>
                  <li>Autres filaments sur demande</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: "355px",
                boxShadow: "none",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "34px",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Lattice4}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ marginTop: "10px" }}
                >
                  <img src={Path} className="path-img" />
                  Résines (SLA)
                </Typography>
                <ul className="plamatrix">
                  <li>Standard (noir, clair, ...)</li>
                  <li>Résistant</li>
                  <li>Flexible</li>
                  <li>Autres sur demande</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: "355px",
                boxShadow: "none",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "34px",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Lattice5}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ marginTop: "10px" }}
                >
                  <img src={Path} className="path-img" />
                  Autres technologies
                </Typography>
                <ul className="plamatrix">
                  <li>
                    Disponibles via notre réseau de fournisseurs. Contactez nous
                    pour davantage d'information.
                  </li>
                </ul>
                <Button variant="contained" color="primary">
                  {" "}
                  Contactez-nous{" "}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
