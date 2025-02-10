import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <React.StrictMode>
        <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
    </Provider>
    </React.StrictMode>
    </>
);

