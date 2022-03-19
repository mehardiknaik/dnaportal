import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Singleinfo } from "./style";

const Info = ({
  Name,
  UserId,
  Email,
  Address,
  MacId,
  CustomerNumber,
  Phone,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Contact Details</Typography>
          <Divider />
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Name
            </Typography>
            <Typography variant="subtitle2" className="text">
              {Name}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              User Id
            </Typography>
            <Typography variant="subtitle2" className="text">
              {UserId}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Customer Number
            </Typography>
            <Typography variant="subtitle2" className="text">
              {CustomerNumber}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Email Id
            </Typography>
            <Typography variant="subtitle2" className="text">
              {Email}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Phone
            </Typography>
            <Typography variant="subtitle2" className="text">
              {Phone}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Address
            </Typography>
            <Typography variant="subtitle2" className="text">
              {Address}
            </Typography>
          </Singleinfo>
          <Singleinfo>
            <Typography variant="subtitle1" className="title">
              Mac Id
            </Typography>
            <Typography variant="subtitle2" className="text">
              {MacId}
            </Typography>
          </Singleinfo>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Info;
