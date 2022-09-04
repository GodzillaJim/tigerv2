import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  ConnectWithoutContact,
  GitHub,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

import LanguageRating from "./subComponents/LanguageRating";
import React from "react";
import SkillRating from "./subComponents/SkillRating";
import SocialMediaIcon from "./subComponents/SocialMediaIcon";
import { infor } from "../../data/data";
import { v4 } from "uuid";

export const SummaryPane = () => {
  const handleDownloadResume = () => {
    window.open(infor.resume);
  };

  const getSocialMediaIcon = (social: string) => {
    const color = "warning";
    switch (social) {
      case "LinkedIn":
        return <LinkedIn color={color} />;
      case "Twitter":
        return <Twitter color={color} />;
      case "GitHub":
        return <GitHub color={color} />;
      default:
        return <ConnectWithoutContact color={color} />;
    }
  };
  return (
    <Grid sx={{ backgroundColor: "#222" }} container direction="column">
      <Grid item>
        <Divider color="" />
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid spacing={2} container direction={"column"}>
              <Grid item>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Avatar
                      sx={{ height: 100, width: 100 }}
                      src={infor.profile}
                      alt="profile avatar"
                      aria-label="profile image"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center" direction="column">
                  <Grid sx={{ textAlign: "center" }} item>
                    <Typography textAlign={"center"} variant="body2">
                      {infor.name}
                    </Typography>
                  </Grid>
                  <Grid sx={{ textAlign: "center" }} item>
                    <Typography textAlign={"center"} variant="caption">
                      {infor.profession}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid
              columns={infor.languages.length}
              container
              justifyContent={"space-evenly"}
              direction="row"
            >
              {infor.languages.map((language) => (
                <Grid columns={1} item key={v4()}>
                  <LanguageRating
                    value={language.level * 100}
                    label={language.name}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container direction="column" justifyContent="center">
              {infor.programmingSkills.map((skill) => (
                <Grid item key={v4()}>
                  <SkillRating {...skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          <Grid sx={{ width: "100%" }} justifyContent="center" item>
            <Card>
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ padding: "10px" }}
                  onClick={handleDownloadResume}
                  color="warning"
                  variant="contained"
                >
                  <Typography
                    className="text-dark text-center"
                    variant="caption"
                  >
                    Download CV
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-evenly">
              {infor.socialMedia.map((media) => (
                <Grid item key={v4()}>
                  <SocialMediaIcon
                    icon={getSocialMediaIcon(media.name)}
                    link={media.link}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
