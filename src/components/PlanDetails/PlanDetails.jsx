import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./style";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Singleinfo } from "./style";
import { GetDate } from "../../config/date";

const PlanDetails = ({ UsedDays, remainingDay,CurrentPlan ,customerexpirydate,PlanSpeed}) => {
  return (
    <Grid item xs={12} md={6}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Plan Details</Typography>
          <Divider />
          <Wrapper>
            <div>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [UsedDays, remainingDay],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 205, 86)",
                      ],
                    },
                  ],
                  labels: ["Used Days", "Remaining Day"],
                }}
                options={{
                  rotation: -90,
                  circumference: 180,
                  responsive: true,
                  maintainAspectRatio: true,
                }}
              />
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
                  {PlanSpeed} MB/s
                </Typography>
              </Singleinfo>
              <Singleinfo>
                <Typography variant="subtitle1" className="title">
                  Days
                </Typography>
                <Typography variant="subtitle2" className="text">
                  {remainingDay+UsedDays} Days
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
