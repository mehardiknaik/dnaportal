import { Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderBg, HeaderContainer } from "./style";
import logout from "../../images/logout.svg";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfodata = useSelector((state) => state.actionOnData);
  const Logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <>
      <HeaderContainer>
        <div className="text">
          <Typography variant="h5">
            {pathname === "/dashboard" && userInfodata.Name
              ? `Hi... ${userInfodata?.Name.split(" ")[0]}`
              : "Login"}
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
