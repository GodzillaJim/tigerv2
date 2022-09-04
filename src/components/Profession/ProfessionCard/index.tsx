import React from "react";
import { Card, Grid, Typography } from "@mui/material";

interface IProfessionCard {
  title: string;
  description: string;
}
const ProfessionCard = ({ title, description }: IProfessionCard) => {
  return (
    <Card className={"p-3"} sx={{ height: 275 }}>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography textAlign={"center"}>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography textAlign={"justify"}>{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfessionCard;
