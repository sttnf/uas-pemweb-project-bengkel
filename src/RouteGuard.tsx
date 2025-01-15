import { FC } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "./routes";
import { useAuth } from "./hooks/useAuth";
import { Outlet, useNavigate } from "react-router";

export const RouteGuard: FC<{ protected?: boolean }> = ({
  protected: isProtected,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (isProtected && !isAuthenticated) {
    navigate(routes.login.path, { state: { from: location.pathname } });
  }

  return <Outlet />;
};
