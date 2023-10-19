import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Footer } from "./components/footer";
import { Profile } from "./pages/profile";
import { PrivateRoute } from "./utils/privateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { userLogin, userProfile, changeUserName } from "./features/userSlice";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const status = localStorage.getItem("statusLogin");
    const profileUser = localStorage.getItem("profileUser");
    const statusProfileUser = localStorage.getItem("statusProfileUser");

    if (token && profileUser) {
      dispatch(userLogin({ token, status }));
      dispatch(userProfile({ profileUser: JSON.parse(profileUser), status: statusProfileUser }));
    }
  }, [dispatch]);

  useEffect(() => {
    const newUserName = localStorage.getItem("newUserName");

    if (newUserName) {
      dispatch(changeUserName(newUserName));
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
