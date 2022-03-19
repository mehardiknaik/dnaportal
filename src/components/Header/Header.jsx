import { Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderBg, HeaderContainer } from "./style";
import logout from "../../images/logout.svg";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <HeaderContainer>
        <div className="text">
          <Typography variant="h4">
            {pathname === "/dashboard" ? "Dashboard" : "Login"}
          </Typography>
        </div>
        {pathname === "/dashboard" && (
          <div onClick={Logout}>
            <img src={logout} width={24} height={24} alt="" />
          </div>
        )}
      </HeaderContainer>
      <HeaderBg />
    </>
  );
};

export default Header;
