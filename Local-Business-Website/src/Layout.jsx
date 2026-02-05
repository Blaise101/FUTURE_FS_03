import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/home/partials/ProductDetails";
import Shop from "./pages/Shop";

export default function Layout() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/shop"
              element={<Shop />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
