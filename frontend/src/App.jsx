import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Footer } from "./components/footer";
import { Profile } from "./pages/profile";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
