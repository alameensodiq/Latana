import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { businessusers, clients } from "./Routes";
import ClientAdminDashboardIndex from "./MainComponents/AdminClients/ClentAdminDashboardIndex";
import ClientAdminDashboard from "./MainComponents/AdminClients/ClientAdminDashboard";
import "react-datepicker/dist/react-datepicker.css";
import ClientUsermanagement from "./MainComponents/AdminClients/ClientUsermanagement";

import React from "react";
import { Loader } from "./Loader.jsx";
import Demo from "./Reusable/Demo.jsx";

const LazyIndexPage = React.lazy(() =>
  import("./MainComponents/LandingPage/MainPage.jsx")
);

function App() {
  return (
    <>
      <Routes>
        <Route path={clients} element={<ClientAdminDashboardIndex />}>
          <Route index element={<ClientAdminDashboard title="Dashboard" />} />
          <Route
            path={`${businessusers}`}
            element={<ClientUsermanagement title="Payment" />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
