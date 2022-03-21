import { Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoginApi } from "../api/api";
import { useForm } from "react-hook-form";
import Toast from "../components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginBg from "../components/LoginBg/LoginBg";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PaperWrapper=styled(Paper)`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
padding: 0.8rem;
height: calc(100vh - 167px);
@media (max-width: 900px) {
  flex-direction: column-reverse;
}
`

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [open, setopen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  var postObj = {
    Alias: "",
    LoginType: "Customer",
  };
  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  };
  const onSubmit = async (details) => {
    setLoading(true);
    const postData = { ...postObj, ...details };
    try {
      const { data } = await LoginApi(postData);
      if (data) {
        console.log(data);
        const token = data.Token.split("~")[0];
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        setToastMsg("Please Enter correct Username and Password!");
        setopen(true);
      }
    } catch {
      setToastMsg("Oops... Something Wents Wrong!");
      setopen(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <Container>
      <PaperWrapper
        elevation={13}
      >
      <LoginBg />
      <LoginForm
        onSubmit={onSubmit}
        loading={loading}
        handleSubmit={handleSubmit}
        register={register}
      />
      </PaperWrapper>
      <Toast open={open} setopen={setopen} toastMsg={toastMsg} />
    </Container>
  );
};

export default Login;
