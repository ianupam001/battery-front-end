import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import ProductCard from "../components/ProductCard";
import { ContactForm } from "../components/elements/ContactForm";
import { useLocation } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BASE_URL;
import { ContactFormProducts } from "./../components/elements/ContactFormProducts";

export default function ProductPage() {
  const location = useLocation();
  const sourcePage = location.pathname;

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
        const res = await fetch(`${apiUrl}/api/product/getproducts?limit=3`);
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
                    className="pt-2 pb-4 max-w-2xl mx-auto w-full post-content"
                    dangerouslySetInnerHTML={{
                      __html: product && product.content,
                    }}
                  ></div>
                     <div className="cart-box">
                     {/* <div class="main-menu-two__call-icon"><span class="icon-phone-call"></span></div> */}
                        <a className="thm-btn-new"  href="https://wa.me/+971509344668?text=Can I get more details about your product?"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                            fill="#f2871c"
                            height="32px"
                            width="32px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 308 308"
                        >
                            <g>
                            <path
                                d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458C233.168,179.508,230.845,178.393,227.904,176.981z"
                            />
                            <path
                                d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867C276.546,215.678,222.799,268.994,156.734,268.994z"
                            />
                            </g>
                        </svg>
                          <span className="txt_whatsapp"> Whatsapp</span>
                        </a>
                      </div>
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
                  <ContactFormProducts sourcePage={sourcePage} />
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
