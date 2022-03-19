import { Paper, Typography } from "@mui/material";
import React from "react";
import { Circle, Circle2, StatusWrapper } from "./style";
import thumbUp from "../../images/thumbUp.svg";
import internet from "../../images/internet.svg";

const Status = ({ Status, OnlineStatus, TotalUsage }) => {
  return (
    <StatusWrapper>
      <Paper elevation={3}>
        <Circle Status={Status}>
          <img src={thumbUp} width={24} height={24} alt="" />
        </Circle>
        <div>
          <Typography variant="subtitle2">Status</Typography>
          <Typography variant="subtitle1">{Status}</Typography>
        </div>
      </Paper>
      <Paper>
        <Circle2 Status={OnlineStatus}>
          <img src={internet} width={24} height={24} alt="" />
        </Circle2>
        <div>
          <Typography variant="subtitle2">{OnlineStatus}</Typography>
          <Typography variant="subtitle1">{TotalUsage}</Typography>
        </div>
      </Paper>
    </StatusWrapper>
  );
};

export default Status;
