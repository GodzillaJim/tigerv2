import React from "react";
import "./index.css";
import { Grid, Typography, AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Typography fontFamily={"Lucida Sans"} variant={"caption"}>
                GodzillaJim @2022
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
