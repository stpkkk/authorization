import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.scss";

import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	<UserContextProvider>
    <App />
	</UserContextProvider>
);
