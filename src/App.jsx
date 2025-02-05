import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allproducts/AllProducts";
// import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import Order from "./pages/order/Order";
import MyData from "./context/myData";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import About from "./pages/aboutUs/About";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import ContactUs from "./pages/contact/ContactUs";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <MyData>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route
              path="/order"
              element={
                <ProtectedRouteForUser>
                  <Order />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/addproducts"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproducts"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyData>
    </>
  );
}

export default App;

// protected route for users

export const ProtectedRouteForUser = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// protected route for admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "iamshivrajjoshi07@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
