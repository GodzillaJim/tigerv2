import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { GitHub, Link } from "@mui/icons-material";
import React, { useState } from "react";

import CustomModal from "./CustomModal";
import { Project } from "../../../types";
import { v4 } from "uuid";

interface IProject {
  project: Project;
  even: boolean;
}
const FullwidthCard = (props: IProject) => {
  const {
    project: { image },
    even,
  } = props;
  return (
    <Grid className="fullwidth-root" container>
      <Grid sx={{ width: "100%" }} item>
        <Card>
          <Grid columns={2} container direction="row">
            <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
              {even && <CardMedia image={image} sx={{ height: 600 }} />}
              {!even && <TextPane {...props.project} />}
            </Grid>
            <Grid item columns={1} xs={2} sm={1} md={1} lg={1} xl={1}>
              {!even && <CardMedia image={image} sx={{ height: 600 }} />}
              {even && <TextPane {...props.project} />}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

const TextPane = (props: Project) => {
  const { name, stack, summary, github, site } = props;
  const handleReadMore = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  return (
    <Grid spacing={1} padding={2} container direction="column">
      <Grid item>
        <Typography variant="h6">{name.toUpperCase()}</Typography>
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
      <Grid sx={{ maxHeight: 450, height: 450, overflow: "hidden" }} item>
        {summary}
      </Grid>
      <Grid item>
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
          <Grid item>
            <CustomModal open={modalIsOpen} project={{ ...props }} handleClose={() => setModalIsOpen(!modalIsOpen)} />
            <Button onClick={handleReadMore}>Read More</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FullwidthCard;
