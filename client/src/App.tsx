import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/Errors/PageNotFound";
import ProductsDashboard from "./components/ProductsDashboard/ProductsDashboard";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<ProductsDashboard />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
