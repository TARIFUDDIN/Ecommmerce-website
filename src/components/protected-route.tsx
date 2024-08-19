import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnlyRoute?: boolean;
  isAdmin?: boolean;
  redirect?: string;
}
const ProtectedRoute = ({
  isAuthenticated,
  children,
  isAdmin,
  adminOnlyRoute,
  redirect = "/",
}: Props) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;

  if (adminOnlyRoute && !isAdmin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;