import { Card, CardContent, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useCallback } from "react";

import { infor } from "../../../data/data";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";

export const CustomMenu = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  });
  const getColor = useCallback(
    (link: string) => {
      let temp = "primary";
      if (location.pathname === link || location.hash === link) {
        temp = "#f39c12";
      }
      return temp;
    },
    [location]
  );
  return (
    <Card>
      <CardContent>
        <List>
          {infor.menu.map((item) => (
            <ListItem disablePadding key={v4()}>
              <ListItemButton component="a" href={item.link}>
                <ListItemText sx={{ textAlign: "end", color: getColor(item.link) }}>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
