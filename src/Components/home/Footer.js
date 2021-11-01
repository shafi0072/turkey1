import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";
export default function Footer() {
  return (
    <div className="footer">
      <Box my={10}>
        <Grid container justifyContent="center">
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Typography
              variant="h2"
              textAlign="center"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              The Shark
            </Typography>
          </Grid>
          <Grid item lg={9} md={11} sm={11} xs={11}>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ textTransform: "uppercase" }}
                >
                  Department
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">
                      Elderly And Disablity
                    </Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Pricing</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Press</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Resources</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Media Program</Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ textTransform: "uppercase" }}
                >
                  Corporate
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Careers</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Pricing</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Press</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Resources</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Media Program</Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ textTransform: "uppercase" }}
                >
                  Department
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Careers</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Pricing</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Press</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Resources</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Media Program</Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ textTransform: "uppercase" }}
                >
                  Careers
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">
                      Elderly And Disablity
                    </Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Pricing</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Press</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Resources</Button>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <Button className="footer-btn">Media Program</Button>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box my={4}>
          <Divider />
        </Box>
        <Typography
          variant="h6"
          textAlign="center"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          Copyright © 2021 The Shark. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}
