import { Box, BoxProps, Grid, GridProps } from "@mui/material";

import React from "react";

export const Item = (props: GridProps) => {
  const { sx, ...other } = props;
  return (
    <Grid
      item
      sx={{
        bgcolor: "transparent",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};
