import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
