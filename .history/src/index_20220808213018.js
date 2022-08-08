import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.scss";

import usetr

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<UserContextProvider>
    <App />
	</UserContextProvider>
);
