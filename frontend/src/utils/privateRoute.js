import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function PrivateRoute() {
  // const user = useSelector((state) => state.userReducer);

  // return user.isConnected ? <Outlet /> : <Navigate to="/login" />;
}
