import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
import { Helmet } from "react-helmet-async";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Products() {
  const title = "Products";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Products" }, // No link for the current page
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${apiUrl}/api/product/getProducts`);
      const blogpost = await res.json();
      setProducts(blogpost.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Product</title>
        <meta name="description" content="Description for the Products page." />
      </Helmet>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      {/*Blog One Start*/}
      <section className="shop-page-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-6 col-md-6">
              <div className="shop-page-one-content">
                <div className="row">
                  {products &&
                    products?.length > 0 &&
                    products?.map((post, index) => (
                      <div key={index} className="col-xl-4">
                        <div className="shop-page-one-single">
                          <div className="img-box">
                            <img src={post.image} alt="Image" />
                          </div>
                          <div className="content-box">
                            <div className="title">
                              <h3>
                                <Link to={`/product/${post.slug}`}>
                                  {post.title}
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
