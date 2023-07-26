import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NotificationsProvider from "./components/NotificationsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NotificationsProvider>
            <App />
        </NotificationsProvider>
    </React.StrictMode>
);
