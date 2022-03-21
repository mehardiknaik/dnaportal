import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Wrapper } from "./style";
import { Singleinfo } from "./style";
import { GetDate } from "../../config/date";
import GaugeChart from "react-gauge-chart";

const PlanDetails = ({
  UsedDays,
  remainingDay,
  CurrentPlan,
  customerexpirydate,
  PlanSpeed,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Card component={Paper} elevation={13}>
        <CardContent>
          <Typography variant="h6">Plan Details</Typography>
          <Divider />
          <Wrapper>
            <div>
              <GaugeChart
                id="gauge-chart5"
                nrOfLevels={20}
                percent={UsedDays / (UsedDays + remainingDay)}
                hideText
                animDelay={500}
              />
              <Typography
                sx={{ color: "#9a9a9a" }}
                variant="subtitle1"
                align="center"
              >
                {UsedDays} days Used & {remainingDay} days remaining
              </Typography>
            </div>
            <div>
              {" "}
              <Singleinfo>
                <Typography variant="subtitle1" className="title">
                  Plan
                </Typography>
                <Typography variant="subtitle2" className="text">
                  {CurrentPlan}
                </Typography>
              </Singleinfo>
              <Singleinfo>
                <Typography variant="subtitle1" className="title">
                  Expire On
                </Typography>
                <Typography variant="subtitle2" className="text">
                  {GetDate(customerexpirydate)}
                </Typography>
              </Singleinfo>
              <Singleinfo>
                <Typography variant="subtitle1" className="title">
                  Speed
                </Typography>
                <Typography variant="subtitle2" className="text">
                  {PlanSpeed} Mb/s
                </Typography>
              </Singleinfo>
              <Singleinfo>
                <Typography variant="subtitle1" className="title">
                  Days
                </Typography>
                <Typography variant="subtitle2" className="text">
                  {remainingDay + UsedDays} Days
                </Typography>
              </Singleinfo>
            </div>
          </Wrapper>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PlanDetails;
