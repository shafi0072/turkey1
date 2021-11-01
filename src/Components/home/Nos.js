import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Robot from "../../assets/images/Robot Capra.png";
import Robot1 from "../../assets/images/Robot Capra1.png";
import Robot2 from "../../assets/images/Robot Capra2.png";
import Robot3 from "../../assets/images/Robot Capra3.png";
import Robot4 from "../../assets/images/Robot Capra4.png";
import Robot5 from "../../assets/images/Robot Capra5.png";
import Robot6 from "../../assets/images/Robot Capra6.png";
import Robot7 from "../../assets/images/Robot Capra7.png";
import Robot8 from "../../assets/images/Robot Capra8.png";
import Robot9 from "../../assets/images/Robot Capra9.png";
import Robot10 from "../../assets/images/Robot Capra10.png";
import Robot11 from "../../assets/images/Robot Capra11.png";
import Circle from "../../assets/images/Path 5297.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Nos() {
  const Data = [
    { img: Robot },
    { img: Robot1 },
    { img: Robot2 },
    { img: Robot3 },
    { img: Robot4 },
    { img: Robot5 },
  ];
  const Data2 = [
    { title: "Industriel", img: Robot6 },
    { title: "Pharmaceutique", img: Robot7 },
    { title: "Robotique", img: Robot8 },
    { title: "Automobile", img: Robot9 },
    { title: "transport", img: Robot10 },
    { title: "Professionnels et start-ups", img: Robot11 },
  ];
  return (
    <div className="Nos">
      <Box marginBottom={10}>
        <Container>
          <Typography variant="h2" textAlign="center" gutterBottom>
            N<span className="greenbottom">os réal </span>isations
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            gutterBottom
            sx={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            Le monde de l'impression 3d est parfois un réseau enchevêtré de
            technologies, de matériaux et de nouveaux processus et capacités, ce
            qui peut rendre la navigation dans l'écosystème de l'impression 3d
            difficile. Mekanisk vous accompagne dans vos projets.
          </Typography>
          <Box textAlign="end">
            <img
              src={Circle}
              className="noscircle"
              height="290px"
              width="256px"
            />
          </Box>
          <Grid container>
            {Data.map((data) => {
              return (
                <>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="Noscard"
                      sx={{
                        height: "260px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="170"
                        image={data.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign="center"
                          component="div"
                        >
                          "TEXTE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
            {Data2.map((data) => {
              return (
                <>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="Noscard"
                      sx={{
                        height: "310px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="170"
                        image={data.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h4"
                          textAlign="center"
                          component="div"
                        >
                          {data.title}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign="center"
                          component="div"
                        >
                          "TEXTE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <img
            src={Circle}
            className="noscircle2"
            height="256px"
            width="256px"
          />
        </Container>
      </Box>
    </div>
  );
}
