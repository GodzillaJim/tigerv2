import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Grid, Typography, Card } from "@mui/material";

const SuccessMessage = () => {
  return (
    <Card>
      <Grid
        padding={3}
        container
        direction={"column"}
        justifyContent={"center"}
      >
        <Grid item className={"text-center"}>
          <CheckCircle
            sx={{ width: "10em", height: "10em" }}
            fontSize={"large"}
            color={"success"}
          />
        </Grid>
        <Grid item className={"text-center"}>
          <Typography variant={"h5"} textAlign={"center"}>
            Thank you for reaching out. I'll get back to you soon.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SuccessMessage;
