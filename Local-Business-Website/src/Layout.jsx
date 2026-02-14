import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/home/partials/ProductDetails";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NoAuthProvider } from "./assets/providers/NoAuthProvider";
import { AuthProvider } from "./assets/providers/AuthProvider";
import Login from "./pages/Login";
import Dashboard from "./pages/auth/Dashboard";
import AdminLayout from "./AuthLayout";
import Products from "./pages/auth/Products";
import { ProductProvider } from "./assets/providers/ProductProvider";
import Collections from "./pages/auth/Collections";
import { CollectionProvider } from "./assets/providers/CollectionProvider";
import Messages from "./pages/auth/Messages";
import { MessageProvider } from "./assets/providers/MessageProvider";

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
    <NoAuthProvider>
      <AuthProvider>
        <ProductProvider>
          <CollectionProvider>
            <MessageProvider>
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
                  <Route
                    path="/admin"
                    element={<AdminLayout />}
                  >
                    <Route
                      path="/admin/dashboard"
                      element={<Dashboard />}
                    />
                    <Route
                      path="/admin/products"
                      element={<Products />}
                    />
                    <Route
                      path="/admin/collections"
                      element={<Collections />}
                    />
                    <Route
                      path="/admin/messages"
                      element={<Messages />}
                    />
                  </Route>
                </Routes>
              </Router>
            </MessageProvider>
          </CollectionProvider>
        </ProductProvider>
      </AuthProvider>
    </NoAuthProvider>
  );
}
