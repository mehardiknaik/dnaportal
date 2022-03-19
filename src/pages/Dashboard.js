import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetUserInfoApi } from "../api/api";
import Name from "../components/Name/Name";
import Status from "../components/Status/Status";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const getDetails = async () => {
    const {
      data: { CustomerDetail },
    } = await GetUserInfoApi();
    console.log(CustomerDetail);
    setUserInfo(CustomerDetail);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      {userInfo && (
        <>
          <Name {...userInfo} />
          <Status Status={userInfo.Status} {...userInfo.Usage}/>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
