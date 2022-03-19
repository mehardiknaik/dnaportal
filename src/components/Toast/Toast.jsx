import React from "react";
import {Snackbar,Alert} from "@mui/material";

const Toast = ({open,setopen,toastMsg}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={()=>setopen(false)}>
      <Alert onClose={()=>setopen(false)} severity="error" sx={{ width: "100%" }}>
        {toastMsg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
