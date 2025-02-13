import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { store } from "./src/redux/store";
import BackdropLoader from "./src/component/BackdropLoader";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <React.StrictMode>
        <Provider store={store}>
        <PersistGate loading={<BackdropLoader/>} persistor={persistor}>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
    </PersistGate>
    </Provider>
    </React.StrictMode>
    </>
);

