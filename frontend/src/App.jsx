import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { SignIn } from "./pages/sign-in";
import { Footer } from "./components/footer";
import { User } from "./pages/user";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
