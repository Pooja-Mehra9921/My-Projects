import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <ThemeProvider theme={theme}>
    <App/>

    </ThemeProvider>
    </>
);

