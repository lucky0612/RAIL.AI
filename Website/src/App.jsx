import { Provider } from "react-redux";
import "../src/styles/tailwind_input.css";
// import "../src/styles/tailwind_output.css";
import "../src/styles/index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Profile";
import Profile from "./pages/Profile";
import Lostandfound from "./pages/Lostandfound";
import EcoVision from "./pages/EcoVision";
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Login />} />
        <Route path="/EcoVision" element={<EcoVision />} />
        <Route path="/DemandShift" element={<DemandShift />} />
        <Route path="/TrainTimetable" element={<TrainTimetable />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lostandfound" element={<Lostandfound />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
