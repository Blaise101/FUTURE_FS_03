import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}
