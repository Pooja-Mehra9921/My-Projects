import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute =()=>{

    const isAuthenticated = useSelector((store)=>store?.app?.isAuthenticated);
   return !isAuthenticated ? <Outlet/> : <Navigate to="/login" replace/> 
}

export default ProtectedRoute;