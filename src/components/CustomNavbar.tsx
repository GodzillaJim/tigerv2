import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import { Menu, MenuOpen, MoreVert, NavigateNext } from "@mui/icons-material";

import React from "react";

interface ICustomNavbar {
  summaryIsOpen: boolean;
  setSummaryIsOpen: () => void;
  menuIsOpen: boolean;
  setMenuIsOpen: () => void;
}
export const CustomNavbar = (props: ICustomNavbar) => {
  const { menuIsOpen, setMenuIsOpen, setSummaryIsOpen, summaryIsOpen } = props;
  return (
    <div>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Grid justifyContent={"space-between"} container direction="row">
            <Grid item>
              <IconButton color="secondary" onClick={setSummaryIsOpen} aria-label="user-summary" sx={{ mr: 2 }}>
                {!summaryIsOpen && <Menu />}
                {summaryIsOpen && <MenuOpen />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="secondary" onClick={setMenuIsOpen} aria-label="menu-icon">
                {!menuIsOpen && <MoreVert />}
                {menuIsOpen && <NavigateNext />}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
