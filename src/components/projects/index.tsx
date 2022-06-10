import { Box, Grid, Typography } from "@mui/material";

import { Item } from "./subComponents/Item";
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
    <div style={{ width: "100%" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: `repeat(3, 1fr)` }}>
        {infor.projects.map((project) => (
          <Item key={`key-${v4()}`}>
            <ProjectCard {...project} />
          </Item>
        ))}
      </Box>
    </div>
  );
};
