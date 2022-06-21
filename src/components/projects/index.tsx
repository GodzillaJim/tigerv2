import { Grid, Typography } from "@mui/material";

import FullwidthCard from "./subComponents/FullwidthCard";
import React from "react";
import { infor } from "../../data/data";
import { v4 } from "uuid";

export const Portfolio = () => {
  return (
    <Grid id="portfolio" container direction="column" spacing={3}>
      <Grid item>
        <Typography sx={{ color: "#1565c0" }} aria-label="section-portfolio-title" variant="h4">
          Latest Projects
        </Typography>
      </Grid>
      <Grid item>
        <CardDeck />
      </Grid>
    </Grid>
  );
};

const CardDeck = () => {
  return (
    <Grid spacing={3} container direction="column">
      {infor.projects.map((project, index) => (
        <Grid item key={`key-${v4()}`}>
          <FullwidthCard even={index % 2 === 0} project={project} />
        </Grid>
      ))}
    </Grid>
  );
};
