import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import HeaderBackend from "./components/Header";
import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";
import FooterBackend from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";

import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

import CreateService from "./pages/CreateService";
import UpdateService from "./pages/UpdateService";

import CreateSlider from "./pages/CreateSlider";
import UpdateSlider from "./pages/UpdateSlider";

import CreateBrand from "./pages/CreateBrand";
import UpdateBrand from "./pages/UpdateBrand";

import CreateTestimonial from "./pages/CreateTestimonial";
import UpdateTestimonial from "./pages/UpdateTestimonial";

import PostPage from "./pages/PostPage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Products from "./pages/Products";
import { useSelector } from "react-redux";

import { renderToString } from "react-dom/server";
import Header2 from "./components/elements/Header2";
import ThankYouMessage from "./components/ThankYouMessage";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* {currentUser ? <HeaderBackend /> : <Header />} */}
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />

          <Route path="/create-product" element={<CreateProduct />} />
          <Route
            path="/update-product/:productId"
            element={<UpdateProduct />}
          />

          <Route path="/create-slider" element={<CreateSlider />} />
          <Route path="/update-slider/:sliderId" element={<UpdateSlider />} />

          <Route path="/create-brand" element={<CreateBrand />} />
          <Route path="/update-brand/:brandId" element={<UpdateBrand />} />

          <Route path="/create-testimonial" element={<CreateTestimonial />} />
          <Route
            path="/update-testimonial/:testimonialId"
            element={<UpdateTestimonial />}
          />

          <Route path="/create-service" element={<CreateService />} />
          <Route
            path="/update-service/:serviceId"
            element={<UpdateService />}
          />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/thank-you" element={<ThankYouMessage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/product/:productSlug" element={<ProductPage />} />
        <Route path="/service/:serviceSlug" element={<ServicePage />} />
      </Routes>

      {/* {currentUser ? <FooterBackend /> : <Footer />} */}
      <Footer />
    </BrowserRouter>
  );
}
