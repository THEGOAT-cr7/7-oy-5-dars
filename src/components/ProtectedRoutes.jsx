import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
