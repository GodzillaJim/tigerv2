import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { GitHub, Link } from "@mui/icons-material";
import React, { useState } from "react";

import CustomModal from "./CustomModal";
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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleReadMore = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div>
      <Grid container>
        <Grid item>
          <Card sx={{ backgroundColor: "#333333eb", paddingBottom: 3 }}>
            <CardMedia sx={{ height: 200 }} image={image} />
            <CardContent sx={{ overflow: "hidden", minHeight: "290px", height: "290px" }}>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h5">{name.toUpperCase().slice(0, 10) + "..."}</Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={1} direction="row">
                    {stack.map((tech) => (
                      <Grid key={v4()} item>
                        <Typography color="#ef6e6e" variant="subtitle2">
                          {tech}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  {summary.substring(0, 200) + "..."}
                  {<Button onClick={handleReadMore}>Read More</Button>}
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
        <Grid item>
          <CustomModal open={modalIsOpen} project={{ ...props }} handleClose={() => setModalIsOpen(!modalIsOpen)} />
        </Grid>
      </Grid>
    </div>
  );
};
