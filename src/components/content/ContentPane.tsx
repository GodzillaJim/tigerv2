import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

import Background from "../../resources/images/contentBackground.png";
import React from "react";
import Stat from "./subContent/Stat";
import Typewriter from "typewriter-effect";
import { infor } from "../../data/data";
import { v4 } from "uuid";

const ContentPane = () => {
  return (
    <Grid container spacing={4} direction={"column"}>
      <Grid item>
        <Card sx={{ backgroundImage: `url(${Background})` }}>
          <CardContent sx={{ backgroundColor: "#333333eb" }}>
            <Grid padding={5} justifyContent={"center"} spacing={3} container direction="column">
              <Grid padding={5} item>
                <Typography textAlign={"center"} fontWeight={"bold"} variant="h2">
                  Thank you for coming.
                </Typography>
                <Typography textAlign={"center"} fontWeight={"bold"} variant="h2">
                  Discover My Amazing
                </Typography>
                <Typography textAlign={"center"} fontWeight={"bold"} variant="h2">
                  Art Space!!
                </Typography>
              </Grid>
              <Grid item>
                <Grid columns={5} justifyContent={"center"} container direction="row">
                  <Grid columns={1} item>
                    <Typography variant="h5" color="#f39c12">
                      &lt;<i style={{ color: "#f39c12" }}>code</i>&gt;
                    </Typography>
                  </Grid>
                  <Grid sx={{ height: "56px" }} columns={3} item>
                    <Typography textAlign="center" variant="h6">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              "I know you'll understand what I say here, but I am not sure you'll realize that what you read is not what I mean!"
                            )
                            .start();
                        }}
                      />
                    </Typography>
                  </Grid>
                  <Grid columns={1} item>
                    <Typography variant="h5" color="#f39c12">
                      &lt;&#47;<i style={{ color: "#f39c12" }}>code</i> &gt;
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="warning">
                      Explore
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Grid justifyContent={"space-around"} container direction="row">
          {infor.briefPortfolio.map((stat) => (
            <Grid key={v4()} item>
              <Stat label={stat.label} value={stat.value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentPane;
