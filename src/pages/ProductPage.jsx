import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import ProductCard from "../components/ProductCard";
import { ContactForm } from "../components/elements/ContactForm";
import { useLocation } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BASE_URL;

export default function ProductPage() {
  const location = useLocation();
  const currentPagePath = location.pathname;

  const { productSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);
  const [recentProducts, setRecentProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${apiUrl}/api/product/getproducts?slug=${productSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setProduct(data.products[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productSlug]);

  useEffect(() => {
    try {
      const fetchRecentProducts = async () => {
        const res = await fetch(`/api/product/getproducts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentProducts(data.products);
        }
      };
      fetchRecentProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <div>
      {/*Start Shop Details Page1*/}
      <section className="shop-details-page1">
        <div className="big-title">shop</div>
        <div className="container">
          <div className="row">
            {/*Start Shop Details Page1 Img*/}
            <div className="col-xl-5">
              <div className="shop-details-page1__img">
                <div className="shop-details-page1__img-inner">
                  <img
                    src={product && product.image}
                    alt={product && product.title}
                  />
                  {/* <div className="overlay-icon">
                            <Link className="lightbox-image" data-fancybox="gallery"
                                href={product && product.image} >
                                <i className="icon-search-interface-symbol" ></i>
                            </Link>
                        </div> */}
                </div>
              </div>
            </div>
            {/*End Shop Details Page1 Img*/}

            {/*Start Shop Details Page1 Content*/}
            <div className="col-xl-7">
              <div className="shop-details-page1__content">
                <div className="shop-details-page1__title">
                  <h6>Electrical</h6>
                  <h2>{product && product.title}</h2>
                </div>
                {/* <div className="shop-details-page1__value">
                        <h3>$200.00 <del>$260.00</del></h3>
                    </div> */}
                <div className="shop-details-page1__text">
                  <div
                    className="p-3 max-w-2xl mx-auto w-full post-content"
                    dangerouslySetInnerHTML={{
                      __html: product && product.content,
                    }}
                  ></div>
                </div>
                {/* <div className="shop-details-page1__product">
                        <ul>
                            <li>
                                <div className="title">
                                    <h5>Author</h5>
                                    <span>:</span>
                                </div>
                                <p>Darby</p>
                            </li>
                            <li>
                                <div className="title">
                                    <h5>Language</h5>
                                    <span>:</span>
                                </div>
                                <p>English</p>
                            </li>
                            <li>
                                <div className="title">
                                    <h5>Services</h5>
                                    <span>:</span>
                                </div>
                                <p>Free Shipping, 7 Days Replacement, Cash On <br/>Delivery Available</p>
                            </li>
                        </ul>
                    </div> */}

                <div className="product-quantity-box-outer">
                  <div className="product-quantity-box">
                    {/* <div className="input-box">
                                <input className="quantity-spinner" type="text" name="quantity"/>
                            </div> */}
                    <div className="right">
                      {/* <div className="cart-box">
                        <button className="thm-btn" type="submit">
                          <span className="txt">Enquire Now</span>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div className="shop-details-page1__wishlist-btn">
                        <Link href="#"><span className="fa fa fa-heart"></span> Add to Wishlist</Link>
                    </div> */}

                {/* <div className="shop-details-page1__description">
                        <div className="inner-title">
                            <h3>Product Details</h3>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content
                            here, content here', making it look like readable English. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                            versions have evolved over the years, sometimes by accident, sometimes on purpose
                        </p>
                    </div> */}

                {/* <div className="shop-details-page1__reviews">
                        <div className="title-box">
                            <h2>Product Reviews</h2>
                        </div>

                        <ul>
                            <li>
                                <div className="inner">
                                    <div className="img-box">
                                        <img src="assets/images/shop/product-review1.jpg" alt=""/>
                                    </div>
                                    <div className="content-box">
                                        <h3>Marshall <span>Mar 21, 2023</span></h3>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                            has roots in a piece of erature from 45 BC,
                                            making it over 2000 years old.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div className="img-box">
                                        <img src="assets/images/shop/product-review2.jpg" alt=""/>
                                    </div>
                                    <div className="content-box">
                                        <h3>Cashel <span>Mar 21, 2021</span></h3>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                            has roots in a piece of erature from 45 BC,
                                            making it over 2000 years old.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div className="img-box">
                                        <img src="assets/images/shop/product-review3.jpg" alt=""/>
                                    </div>
                                    <div className="content-box">
                                        <h3>Everest <span>Mar 20, 2021</span></h3>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                            has roots in a piece of erature from 45 BC,
                                            making it over 2000 years old.</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div> */}

                <div className="shop-details-page1__form">
                  <ContactForm currentPagePath={currentPagePath} />
                </div>
              </div>
            </div>
            {/*End Shop Details Page1 Content*/}
          </div>
        </div>
      </section>
      {/*End Shop Details Page1*/}
      {/*Start Related Products One*/}
      <section className="related-products-one">
        <div className="container">
          <div className="inner-title">
            <h3>Related Products</h3>
          </div>
          <div className="row">
            {recentProducts &&
              recentProducts.map((productrecent) => (
                <ProductCard
                  key={productrecent._id}
                  productrecent={productrecent}
                />
              ))}
          </div>
        </div>
      </section>
      {/*End Related Products One*/}
    </div>
  );
}
