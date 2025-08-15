import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Property from "./components/Property.jsx";
import { Login } from "./components/login.jsx";
import { Signup } from "./components/Signup.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/sign-up" Component={Signup} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
