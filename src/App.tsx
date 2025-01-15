import { FC } from "react";
import { Routes, Route } from "react-router";
import { routes } from "./routes";
import { RouteGuard } from "./RouteGuard";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Appointments from "./pages/dashboard/Appointments";
import Customers from "./pages/dashboard/Customers";
import Inventory from "./pages/dashboard/Inventory";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";

const App: FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path={routes.home.path} element={<LandingPage />} />
      <Route path={routes.login.path} element={<LoginPage />} />

      {/* Dashboard routes */}
      <Route element={<RouteGuard protected />}>
        <Route path={routes.dashboard.root.path}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default App;
