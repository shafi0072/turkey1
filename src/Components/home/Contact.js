import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import men from "../../assets/images/Icon awesome-user.png";
import email from "../../assets/images/Icon material-email.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import location from "../../assets/images/Icon material-location-on.png";
import emailimg from "../../assets/images/Icon zocial-email.png";
import phone from "../../assets/images/Icon awesome-phone-alt.png";
import clock from "../../assets/images/Icon simple-clockify.png";
import Mention from "../../assets/images/Mention.png";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function Contact() {
  return (
    <div className="Contact">
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          <span className="greenbottom">Con</span>tact
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          gutterBottom
          sx={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Aucun projet n'est trop petit ! Contactez nous pour ajouter de la
          valeur à <br />
          votre projet et matérialiser vos idées.
        </Typography>
        <Box my={3}>
          <Grid container justifyContent="center">
            <Grid item lg={3} xl={4} md={8} sm={8} xs={10}>
              <Typography variant="h5" className="Contactez" gutterBottom>
                Contactez-nous
              </Typography>
              <Box my={2}>
                <TextField
                  id="outlined-basic"
                  placeholder="Nom"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={men} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box my={2}>
                <TextField
                  id="outlined-basic"
                  placeholder="Courriel"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={email} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box my={2}>
                <TextField
                  id="outlined-basic"
                  placeholder="Message"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={8}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="Contactez-btn"
              >
                {" "}
                Envoyer{" "}
              </Button>
            </Grid>
            <Grid item lg={1} xl={1}></Grid>
            <Grid item lg={5} xl={5} md={7} sm={10} xs={10}>
              <Typography variant="h2" className="shark-contact" gutterBottom>
                The Shark
              </Typography>
              <Typography variant="h6" gutterBottom>
                Pour obtenir une soumission dans les 24 heures, envoyez-nous
                votre modèle 3D (format STL) par courriel. Nous pouvons
                également faire le transfert de différents formats de fichiers.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ paddingTop: "10px" }}>
                Sinon, un sketch à la main ou des photos peuvent très bien
                initier la discussion.
              </Typography>

              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "2px solid black",
                      opacity: "0.5",
                      height: "55px",
                    }}
                  />
                }
                spacing={2}
                sx={{ marginTop: "50px" }}
              >
                <img
                  src={location}
                  width="19px"
                  height="26px"
                  className="location-img"
                />
                <Typography variant="h6" gutterBottom>
                  Street: 3804 Sunburst Drive. City: Fort Myers Beach.
                  State/province/area: Florida · Street: 3060 Poplar
                </Typography>
              </Stack>
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "4px solid black !impoartant",
                      opacity: "0.5",
                      height: "55px",
                    }}
                  />
                }
                spacing={2}
                className="stack-contact"
              >
                <img
                  src={emailimg}
                  width="24px"
                  height="16px"
                  className="location-img"
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ paddingTop: "10px" }}
                >
                  info@sample.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "4px solid black !impoartant",
                      opacity: "0.5",
                      height: "55px",
                    }}
                  />
                }
                spacing={2}
                className="stack-contact"
              >
                <img
                  src={phone}
                  width="21px"
                  height="21px"
                  className="location-img"
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    paddingTop: "10px",
                    color: "#7ECC3C !important",
                    opacity: "1 !important",
                  }}
                >
                  123456789
                </Typography>
              </Stack>
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "4px solid black !impoartant",
                      opacity: "0.5",
                      height: "55px",
                    }}
                  />
                }
                spacing={2}
                className="stack-contact"
              >
                <img
                  src={clock}
                  width="23px"
                  height="26px"
                  className="location-img"
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ paddingTop: "10px" }}
                >
                  lundi au vendredi de 8h00 à 17h00
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3} xl={2} md={4} sm={10} xs={10}>
              <Box textAlign="center">
                <img
                  src={Mention}
                  width="342px"
                  height="290px"
                  className="mention-img"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
