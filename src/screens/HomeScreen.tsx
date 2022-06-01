import { Collapse, Grid, Slide, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

import { CustomNavbar } from "../components/CustomNavbar";
import { Helmet } from "react-helmet";
import { infor } from "../data/data";

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
    <div>
      <Helmet>
        <title>{infor.homePageTitle}</title>
      </Helmet>
      <Grid gap={1} direction="column" container>
        <Grid item>
          <CustomNavbar
            menuIsOpen={menuIsOpen}
            summaryIsOpen={summaryIsOpen}
            setSummaryIsOpen={() => setSummaryIsOpen(!summaryIsOpen)}
            setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
          />
        </Grid>
        <Grid item>
          <Grid
            style={{ height: "100vh" }}
            bgcolor={"Background.primary"}
            flexGrow={1}
            container
            direction="row"
            columns={12}
            justifyContent="center"
          >
            {summaryIsOpen && (
              <Grid
                style={{ backgroundColor: "InfoBackground" }}
                item
                id="left-sidebar"
                xs={summaryPaneSize}
                sm={summaryPaneSize}
                md={summaryPaneSize}
              >
                <Slide in={summaryIsOpen} direction="right">
                  <Typography>Summary</Typography>
                </Slide>
              </Grid>
            )}
            <Grid item id="content-page" xs={contentPaneSize} sm={contentPaneSize} md={contentPaneSize}>
              content
            </Grid>

            {menuIsOpen && (
              <Grid
                item
                id="right-pane"
                style={{ backgroundColor: "InfoBackground" }}
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
