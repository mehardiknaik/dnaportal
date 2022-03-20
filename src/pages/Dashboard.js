import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserInfoApi } from "../api/api";
import DashboardBg from "../components/DashboardBg/DashboardBg";
import Info from "../components/Info/Info";
import Name from "../components/Name/Name";
import PlanDetails from "../components/PlanDetails/PlanDetails";
import Status from "../components/Status/Status";
const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const getDetails = async () => {
    try {
      const {
        data: { CustomerDetail },
      } = await GetUserInfoApi();
      console.log(CustomerDetail);
      setUserInfo(CustomerDetail);
    } catch {
      console.log("error");
      localStorage.clear();
      navigate("/");
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <DashboardBg />
      <Container>
        {userInfo && (
          <>
            <Name {...userInfo} />
            <Status Status={userInfo.Status} {...userInfo.Usage} />
            <Grid container spacing={2}>
              <Info {...userInfo} />
              <PlanDetails {...userInfo} />
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
