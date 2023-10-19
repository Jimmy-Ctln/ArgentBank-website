import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }) {
  const user = useSelector((state) => state.userSlice);
  const token = localStorage.getItem('token')

  if (user.isConnected || token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
