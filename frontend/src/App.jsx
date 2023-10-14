import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Footer } from "./components/footer";
import { Profile } from "./pages/profile";
import { PrivateRoute } from "./utils/privateRoute";
import "./App.css";



export function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path="/profile" element={<Profile/>}/>
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
