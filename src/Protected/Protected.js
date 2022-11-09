import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Protected() {
  const useAuth = window.localStorage;
  const token = useAuth.getItem("token")
  //! shuni bir qator ko'rib chiqish kerak
  if (token === "QpwL5tke4Pnpja7X4") {
    return <Outlet />;
  } else {
    return <Navigate to={"/logout"} />
  }
}

export default Protected;
