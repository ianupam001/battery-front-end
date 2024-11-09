import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import FullPageLoader from "./components/elements/FullPageLoader";

// Lazy loading of pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Projects = lazy(() => import("./pages/Projects"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Footer = lazy(() => import("./components/elements/Footer"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const OnlyAdminPrivateRoute = lazy(() => import("./components/OnlyAdminPrivateRoute"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const UpdatePost = lazy(() => import("./pages/UpdatePost"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));
const UpdateProduct = lazy(() => import("./pages/UpdateProduct"));
const CreateService = lazy(() => import("./pages/CreateService"));
const UpdateService = lazy(() => import("./pages/UpdateService"));
const CreateSlider = lazy(() => import("./pages/CreateSlider"));
const UpdateSlider = lazy(() => import("./pages/UpdateSlider"));
const CreateBrand = lazy(() => import("./pages/CreateBrand"));
const UpdateBrand = lazy(() => import("./pages/UpdateBrand"));
const CreateTestimonial = lazy(() => import("./pages/CreateTestimonial"));
const UpdateTestimonial = lazy(() => import("./pages/UpdateTestimonial"));
const PostPage = lazy(() => import("./pages/PostPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Search = lazy(() => import("./pages/Search"));
const Blog = lazy(() => import("./pages/Blog"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Header2 = lazy(() => import("./components/elements/Header2"));
const TopSpace = lazy(() => import("./components/elements/TopSpace"));

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {/* Wrap the whole app inside Suspense */}
      <Suspense fallback={<FullPageLoader />}>
        <ScrollToTop />
        <TopSpace />
        <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          
          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          
          {/* Only Admin Routes */}
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/update-product/:productId" element={<UpdateProduct />} />
            <Route path="/create-slider" element={<CreateSlider />} />
            <Route path="/update-slider/:sliderId" element={<UpdateSlider />} />
            <Route path="/create-brand" element={<CreateBrand />} />
            <Route path="/update-brand/:brandId" element={<UpdateBrand />} />
            <Route path="/create-testimonial" element={<CreateTestimonial />} />
            <Route path="/update-testimonial/:testimonialId" element={<UpdateTestimonial />} />
            <Route path="/create-service" element={<CreateService />} />
            <Route path="/update-service/:serviceId" element={<UpdateService />} />
          </Route>

          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route path="/product/:productSlug" element={<ProductPage />} />
          <Route path="/service/:serviceSlug" element={<ServicePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
