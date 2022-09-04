import { Button, Grid, Typography } from "@mui/material";
import { GitHub, Link } from "@mui/icons-material";
import {
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";

import { Project } from "../../../types";
import React from "react";
import { v4 } from "uuid";

interface ICustomModal {
  open: boolean;
  handleClose: () => void;
  project: Project;
}
const CustomModal = (props: ICustomModal) => {
  const { open, handleClose, project } = props;
  return (
    <div>
      <MDBModal
        modalClassName="bg-transparent"
        contentClassName="bg-dark"
        isOpen={open}
        toggle={handleClose}
        centered
        size="lg"
      >
        <MDBModalHeader toggle={handleClose}>{project.name}</MDBModalHeader>
        <MDBModalBody>
          <Grid spacing={2} container>
            <Grid item>
              <img
                className="img-fluid"
                src={project.image}
                style={{ maxHeight: 270 }}
                alt={project.name}
              />
            </Grid>
            <Grid item>
              <Grid spacing={3} container direction="row">
                {project.stack.map((tech) => (
                  <Grid key={v4()} item>
                    <Typography color="#ef6e6e" variant="subtitle2">
                      {tech}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1">{project.summary}</Typography>
            </Grid>
          </Grid>
        </MDBModalBody>
        <MDBModalFooter>
          <Grid justifyContent={"space-evenly"} container direction="row">
            <Grid item>
              <Button
                href={project.github}
                aria-label="redirect-to-github-page"
              >
                <GitHub />
              </Button>
            </Grid>
            <Grid item>
              <Button href={project.site} aria-label="redirect-to-live-site">
                <Link />
              </Button>
            </Grid>
          </Grid>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};

export default CustomModal;
