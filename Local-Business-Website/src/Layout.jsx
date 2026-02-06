import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/home/partials/ProductDetails";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ContactProvider } from "./assets/contexts/ContactProvider";
import { AuthProvider } from "./assets/contexts/AuthProvider";
import Login from "./pages/Login";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default function Layout() {
  return (
    <ContactProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Home />
                </PublicLayout>
              }
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/shop"
              element={
                <PublicLayout>
                  <Shop />
                </PublicLayout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <PublicLayout>
                  <ProductDetails />
                </PublicLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PublicLayout>
                  <About />
                </PublicLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <PublicLayout>
                  <Contact />
                </PublicLayout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ContactProvider>
  );
}
