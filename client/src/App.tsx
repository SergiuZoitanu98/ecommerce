import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/Errors/PageNotFound";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
