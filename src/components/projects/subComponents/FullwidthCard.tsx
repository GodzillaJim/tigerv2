import "./fullwidthcard.css";

import { Button, Card, CardMedia, Grid, Link as LinkContainer, Typography } from "@mui/material";
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
    project: { image, imageAttribution },
    even,
  } = props;
  const height = 500;
  const imageHeight = 350;
  const imageWidth = 400;

  return (
    <Grid className="fullwidth-root" container>
      <Grid sx={{ width: "100%" }} item>
        <Card>
          <Grid columns={2} container direction="row">
            <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
              <Grid height="100%" container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                  {even && (
                    <CardMedia
                      className="background-image-contain"
                      image={image}
                      sx={{ height: imageHeight, width: imageWidth }}
                    />
                  )}
                  {!even && <TextPane project={props.project} height={height} />}
                </Grid>
              </Grid>
            </Grid>
            <Grid item columns={1} xs={2} sm={1} md={1} lg={1} xl={1}>
              <Grid height="100%" container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                  {!even && (
                    <CardMedia
                      className="background-image-contain"
                      image={image}
                      sx={{ height: imageHeight, width: imageWidth }}
                    />
                  )}
                  {even && <TextPane project={props.project} height={height} />}
                </Grid>
              </Grid>
            </Grid>
            {imageAttribution && (
              <Grid item>
                <LinkContainer variant="caption" href={imageAttribution.link}>
                  <Typography fontSize="0.6rem" color="primary">
                    {imageAttribution.text}
                  </Typography>
                </LinkContainer>
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

const TextPane = ({ project, height }: { project: Project; height: number }) => {
  const { name, stack, summary, github, site } = project;
  const handleReadMore = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  return (
    <Grid
      height={height}
      spacing={1}
      padding={3}
      justifyContent="center"
      alignItems="center"
      container
      direction="column"
    >
      <Grid item>
        <Typography textAlign={"center"} fontFamily={"san serif"} variant="h6">
          {name.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent={"center"} spacing={1} direction="row">
          {stack.map((tech) => (
            <Grid key={v4()} item>
              <Typography color="#ef6e6e" variant="subtitle2">
                {tech}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid sx={{ overflow: "hidden" }} item>
        {summary.substring(0, 300) + "..."}
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
            <CustomModal open={modalIsOpen} project={{ ...project }} handleClose={() => setModalIsOpen(!modalIsOpen)} />
            <Button onClick={handleReadMore}>Read More</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FullwidthCard;
