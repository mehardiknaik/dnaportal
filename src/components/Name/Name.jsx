import { Typography } from "@mui/material";
import React from "react";
import { NameWarpper } from "./style";

const Name = ({ Name, CurrentPlan }) => {
  return (
    <NameWarpper>
      <Typography gutterBottom variant="subtitle2" component="span">
        {CurrentPlan}
      </Typography>
    </NameWarpper>
  );
};

export default Name;
