import React from "react";
import {  Paper, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormWrapper } from "./style";

const LoginForm = ({onSubmit,loading,handleSubmit,register}) => {
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
    </FormWrapper>
  );
};

export default LoginForm;
