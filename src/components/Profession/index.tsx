import React from "react";
import { Grid, Typography } from "@mui/material";
import { infor } from "../../data/data";
import { v4 } from "uuid";
import ProfessionCard from "./ProfessionCard";

const Profession = () => {
  return (
    <Grid spacing={2} container direction={"column"}>
      <Grid item>
        <Typography
          sx={{ color: "#1565c0" }}
          aria-label="section-portfolio-title"
          variant="h4"
        >
          {"Some of my Hats"}
        </Typography>
      </Grid>
      <Grid item>
        <Grid direction={"row"} spacing={2} container columns={12}>
          {infor.whatTodo.map((todo) => (
            <Grid key={`key-${v4()}`} item lg={4} sm={4} xs={12} md={4}>
              <ProfessionCard {...todo} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profession;
