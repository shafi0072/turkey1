import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Impression from "../../assets/images/import-291.png";
import Monograph from "../../assets/images/monograph-invoicing-1600x1200.png";
import AdobeStock from "../../assets/images/AdobeStock_90761829-min.png";
import Slider from "react-slick";
import Rightarrow from "../../assets/images/right.png";
import Leftarrow from "../../assets/images/leftarrow.png";

export default function Services() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <img src={Rightarrow} />,
    prevArrow: <img src={Leftarrow} />,
  };
  return (
    <div className="services">
      <Container>
        <Typography variant="h2" gutterBottom>
          <span className="greenbottom"> Nos </span> services
        </Typography>
        <Typography variant="h6" gutterBottom>
          MEKANISK propose des services de conception (Design for Additive
          Manufacturing - DfAM) et de fabrication additive professionnels,
          personnalisés et adaptés à vos besoins, expertise basée sur plus de 20
          ans en développement de produits dans différentes industries, dont
          l’aéronautique et la robotique.
        </Typography>
        <Box my={6}>
          <Slider {...settings}>
            <div>
              <Grid container justifyContent="center">
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Impression}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        impression 3D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Monograph}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        Conception 3D/2D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={AdobeStock}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Développement de produit
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container justifyContent="center">
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Impression}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        impression 3D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Monograph}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        Conception 3D/2D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={AdobeStock}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Développement de produit
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container justifyContent="center">
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Impression}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        impression 3D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Monograph}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        Conception 3D/2D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={AdobeStock}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Développement de produit
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container justifyContent="center">
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Impression}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        impression 3D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={Monograph}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="impression-text"
                      >
                        Conception 3D/2D
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card
                    className="servicecard"
                    sx={{
                      maxWidth: 345,
                      height: "275px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "34px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={AdobeStock}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Développement de produit
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Slider>
        </Box>
      </Container>
    </div>
  );
}
