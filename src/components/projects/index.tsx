import { Grid, Typography } from "@mui/material";

import { ProjectCard } from "./subComponents/ProjectCard";
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
    <div className="row">
      {infor.projects.map((project) => (
        <div className="col-sm-12 col-lg-4 my-2" key={`key-${v4()}`}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};
