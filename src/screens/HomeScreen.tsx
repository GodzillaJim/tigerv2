import { Grid, Slide } from "@mui/material";
import React, { useMemo, useState } from "react";

import ContentPane from "../components/content/ContentPane";
import { CustomMenu } from "../components/summary/menu";
import { CustomNavbar } from "../components/CustomNavbar";
import { Helmet } from "react-helmet";
import { Portfolio } from "../components/projects";
import { SummaryPane } from "../components/summary";
import { infor } from "../data/data";
import Profession from "../components/Profession";
import Partners from "../components/Partners";
import Contact from "../components/contact";

export const HomeScreen = () => {
  const [summaryIsOpen, setSummaryIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
      <Grid
        padding={1}
        sx={{ backgroundColor: "#222" }}
        spacing={1}
        direction="column"
        container
      >
        <Grid item>
          <CustomNavbar
            menuIsOpen={menuIsOpen}
            summaryIsOpen={summaryIsOpen}
            setSummaryIsOpen={() => setSummaryIsOpen(!summaryIsOpen)}
            setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
          />
        </Grid>
        <Grid id="contentStart" sx={{ mt: 7 }} item>
          <Grid
            spacing={1}
            bgcolor={"transparent"}
            container
            direction="row"
            columns={12}
            justifyContent="center"
          >
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
              <Grid spacing={3} container direction="column">
                <Grid item>
                  <ContentPane />
                </Grid>
                <Grid item>
                  <Portfolio />
                </Grid>
                <Grid item>
                  <Profession />
                </Grid>
                <Grid item>
                  <Partners />
                </Grid>
                <Grid item>
                  <Contact />
                </Grid>
              </Grid>
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
                  <div>
                    <CustomMenu />
                  </div>
                </Slide>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
