import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import React from "react";
import { infor } from "../data/data";

export const HomeScreen = () => {
  return (
    <div>
      <Helmet>
        <title>{infor.homePageTitle}</title>
      </Helmet>
      <Grid direction="column" container>
        <Grid item>Navigation bar</Grid>
        <Grid item>
          <Grid style={{ height: "100vh" }} bgcolor={"Background.primary"} container direction="row" columns={12}>
            <Grid item id="left-sidebar" xs={2} sm={2} md={2}>
              summary
            </Grid>
            <Grid item id="content-page" xs={8} sm={8} md={8}>
              content
            </Grid>
            <Grid item id="right-pane" xs={2} sm={2} md={2}>
              menu
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
