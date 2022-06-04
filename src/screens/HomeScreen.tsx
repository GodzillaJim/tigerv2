import { Grid, Slide, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

import ContentPane from "../components/content/ContentPane";
import { CustomNavbar } from "../components/CustomNavbar";
import { Helmet } from "react-helmet";
import { SummaryPane } from "../components/summary";
import { infor } from "../data/data";

export const HomeScreen = () => {
  const [summaryIsOpen, setSummaryIsOpen] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const summaryPaneSize = useMemo(() => {
    let temp = 0;
    if (summaryIsOpen) {
      temp = 2;
    }
    return temp;
  }, [summaryIsOpen]);

  const menuPaneSize = useMemo(() => {
    let temp = 0;
    if (menuIsOpen) {
      temp = 2;
      return temp;
    }
  }, [menuIsOpen]);

  const contentPaneSizeLg = useMemo(() => {
    let temp = 9;
    if (summaryIsOpen) {
      temp = 10;
    }
    if (menuIsOpen) {
      temp = 10;
    }
    if (menuIsOpen && summaryIsOpen) {
      temp = 8;
    }
    return temp;
  }, [summaryIsOpen, menuIsOpen]);

  const contentPaneSize = useMemo(() => {
    let temp = 12;
    if (summaryIsOpen) {
      temp = 10;
    }
    if (menuIsOpen) {
      temp = 10;
    }
    if (menuIsOpen && summaryIsOpen) {
      temp = 8;
    }
    return temp;
  }, [summaryIsOpen, menuIsOpen]);
  return (
    <div id="home">
      <Helmet>
        <title>{infor.homePageTitle}</title>
      </Helmet>
      <Grid padding={1} sx={{ backgroundColor: "#222" }} spacing={1} direction="column" container>
        <Grid item>
          <CustomNavbar
            menuIsOpen={menuIsOpen}
            summaryIsOpen={summaryIsOpen}
            setSummaryIsOpen={() => setSummaryIsOpen(!summaryIsOpen)}
            setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
          />
        </Grid>
        <Grid id="contentStart" sx={{ mt: 7 }} item>
          <Grid spacing={1} bgcolor={"transparent"} container direction="row" columns={12} justifyContent="center">
            {summaryIsOpen && (
              <Grid
                style={{ backgroundColor: "transparent" }}
                item
                id="left-sidebar"
                xs={summaryPaneSize}
                sm={summaryPaneSize}
                md={summaryPaneSize}
              >
                <Slide in={summaryIsOpen} direction="right">
                  <div>
                    <SummaryPane />
                  </div>
                </Slide>
              </Grid>
            )}
            <Grid
              item
              id="content-page"
              xs={contentPaneSize}
              sm={contentPaneSize}
              md={contentPaneSize}
              lg={contentPaneSizeLg}
            >
              <ContentPane />
            </Grid>

            {menuIsOpen && (
              <Grid
                item
                id="right-pane"
                style={{ backgroundColor: "transparent" }}
                xs={menuPaneSize}
                sm={menuPaneSize}
                md={menuPaneSize}
              >
                <Slide in={menuIsOpen} direction="left">
                  <Typography>Menu</Typography>
                </Slide>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
