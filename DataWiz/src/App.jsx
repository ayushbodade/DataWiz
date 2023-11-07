import "./App.css";
import AutoML from "./scenes/autoML/AutoML";
import GptBanker from "./scenes/gptBanker/GptBanker";
import HomePage from "./scenes/homePage/HomePage";
import Drive from "./components/Drive/Drive";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./components/Drive/Auth/SignIn";
import Header from "./components/Header/Header";
import Register from "./scenes/Register/Register";
import Login from "./scenes/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/autoMl" element={<AutoML />} />
          <Route path="/driveAgm" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
