import { Grid, Typography } from "@mui/material";

import { Line } from "rc-progress";
import React from "react";

interface ISkillRating {
  name: string;
  value: number;
}
const SkillRating = (props: ISkillRating) => {
  const { name, value } = props;
  return (
    <Grid aria-label="skill rating container" container direction="column">
      <Grid item>
        <Grid container direction="row" justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="caption" textTransform={"capitalize"}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" textTransform={"capitalize"}>
              {value * 100}%
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Line percent={value * 100} strokeWidth={1} strokeColor="#f39c12" />
      </Grid>
    </Grid>
  );
};

export default SkillRating;
