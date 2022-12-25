import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/dashboard';
import LandingPage from './Pages/landingPage';

function App() {
  return (
      <BrowserRouter>
      <Routes>        
      <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
