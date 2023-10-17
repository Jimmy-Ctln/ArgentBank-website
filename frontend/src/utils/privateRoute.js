import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }) {
  const user = useSelector((state) => state.userSlice);

  if (user.isConnected) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
