import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { GitHub, Link } from "@mui/icons-material";

import React from "react";
import { v4 } from "uuid";

interface IProjectCard {
  name: string;
  image: string;
  stack: string[];
  summary: string;
  github: string;
  site: string;
}
export const ProjectCard = (props: IProjectCard) => {
  const { image, name, stack, summary, github, site } = props;

  const handleReadMore = () => {
    // Handle ReadMore
  };
  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardMedia sx={{ height: 300 }} image={image} />
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h5">{name.toUpperCase()}</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  {stack.map((tech) => (
                    <Grid key={v4()} item>
                      <Typography color="darkred" variant="subtitle2">
                        {tech}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                {summary.substring(0, 300) + "..."}
                {summary.length > 300 && <Button onClick={handleReadMore}>Read More</Button>}
              </Grid>
            </Grid>
          </CardContent>
          <CardActionArea>
            <Grid justifyContent={"space-evenly"} container direction="row">
              <Grid item>
                <Button href={github} aria-label="redirect-to-github-page">
                  <GitHub />
                </Button>
              </Grid>
              <Grid item>
                <Button href={site} aria-label="redirect-to-live-site">
                  <Link />
                </Button>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
