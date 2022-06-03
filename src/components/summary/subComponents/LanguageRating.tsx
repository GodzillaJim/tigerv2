import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Grid, Typography } from "@mui/material";

import React from "react";

interface ILanguageRating {
  value: number;
  text?: string;
  label: string;
}
const LanguageRating = (props: ILanguageRating) => {
  const { value, text, label } = props;
  return (
    <Grid container justifyContent="center" direction="column">
      <Grid sx={{ height: 50, width: 50 }} item>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#f39c12",
            textColor: "#8eb5bd",
          })}
          value={value}
          text={text || "" + value}
        />
      </Grid>
      <Grid item>
        <Typography variant="caption" className="text-center text-light">
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LanguageRating;
