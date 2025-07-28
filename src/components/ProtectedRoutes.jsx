import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

function ProtectedRoutes({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default ProtectedRoutes;
