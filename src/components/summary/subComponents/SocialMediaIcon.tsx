import { Grid, IconButton } from "@mui/material";

import React from "react";

interface ISocialMediaIcon {
  link: string;
  icon: JSX.Element;
}
const SocialMediaIcon = (props: ISocialMediaIcon) => {
  const { link, icon } = props;
  const handleRedirect = () => {
    window.open(link);
  };
  return (
    <Grid container>
      <Grid item>
        <IconButton onClick={handleRedirect}>{icon}</IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialMediaIcon;
