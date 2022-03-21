import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserInfoApi } from "../api/api";
import DashboardBg from "../components/DashboardBg/DashboardBg";
import Info from "../components/Info/Info";
import Name from "../components/Name/Name";
import PlanDetails from "../components/PlanDetails/PlanDetails";
import Status from "../components/Status/Status";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../actions/actions";
const Dashboard = () => {
  const userInfodata = useSelector((state) => state.actionOnData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getDetails = async () => {
    try {
      const {
        data: { CustomerDetail },
      } = await GetUserInfoApi();
      console.log(CustomerDetail);
      dispatch(addData(CustomerDetail));
    } catch {
      console.log("error");
      localStorage.clear();
      dispatch({type:"LOGOUT"})
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
        {Object.keys(userInfodata).length > 0 && (
          <>
            <Name {...userInfodata} />
            <Status Status={userInfodata.Status} {...userInfodata.Usage} />
            <Grid container spacing={2}>
              <Info {...userInfodata} />
              <PlanDetails {...userInfodata} />
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
