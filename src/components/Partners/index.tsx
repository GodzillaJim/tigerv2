import React from "react";
import { Grid } from "@mui/material";
import SpringIcon from "../icons/SpringIcon";
import NodeIcon from "../icons/NodeIcon";
import ReactIcon from "../icons/ReactIcon";
import AWSIcon from "../icons/AWSIcon";

const Partners = () => {
  return (
    <Grid
      justifyContent={"space-around"}
      sx={{ width: "100%" }}
      container
      direction={"row"}
    >
      <Grid item>
        <SpringIcon />
      </Grid>
      <Grid item>
        <NodeIcon />
      </Grid>
      <Grid item>
        <AWSIcon />
      </Grid>
      <Grid item>
        <ReactIcon />
      </Grid>
    </Grid>
  );
};

export default Partners;
