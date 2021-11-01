import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Mobilemenu from "./Mobilemenu";
import { Hidden } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar-setting">
        <Toolbar>
          <Button color="primary">The Shark</Button>
          <Hidden mdDown>
            <div className="appbarmargn">
              <Button color="inherit" className="shark-btn">
                The Shark
              </Button>
              <Button color="inherit">
                Easi – evaluation in ayres sensory integration
              </Button>
              <Button color="inherit">contact</Button>
              <Button color="inherit">English</Button>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className="appbarmargn">
              <Mobilemenu />
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
