import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Protected() {
  const useAuth = window.localStorage;
  // const token = useAuth.getItem("token")
  // console.log(token);
  if (useAuth.getItem("token")) {

    return <Outlet />;
  } else {
    return <Navigate to={"/logout"} />;
  }
}

export default Protected;
