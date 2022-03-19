import { Container, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoginApi } from "../api/api";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import Toast from "../components/Toast/Toast";
import { useNavigate } from "react-router-dom";

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
      // navigate("/dashboard");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            height: "calc(100vh - 97px);",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            {...register("Username", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            {...register("Password", { required: true })}
          />
          <LoadingButton
            type="submit"
            loading={loading}
            loadingIndicator="Loading.."
            variant="outlined"
            sx={{ width: "9rem" }}
          >
            Login
          </LoadingButton>
        </Paper>
      </form>
      <Toast open={open} setopen={setopen} toastMsg={toastMsg} />
    </Container>
  );
};

export default Login;
