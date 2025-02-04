import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/Home";
import LoginPage from "./src/pages/Login";

const App =()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route  path="home" element={<HomePage />}/>
            <Route path="login" element={<LoginPage />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
};

export default App;