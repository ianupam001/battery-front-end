import { Link } from "react-router-dom";
import Cta from "../sections/home1/Cta";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Footer() {
  const [userServices, setUserServices] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  // const router = useRouter()
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/service/getservices?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUserServices(data.services);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/product/getproducts?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUserProducts(data.products);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Cta />
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <img src="assets/images/shapes/footer-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <img
                        src="https://static.wixstatic.com/media/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png/v1/fill/w_73,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    Get back on the road with our reliable car battery
                    replacement services. Drive stress-free knowing your car
                    battery is in top condition.
                  </p>
                  <div className="site-footer__social">
                    <Link href="https://www.facebook.com/profile.php?id=61565118175123">
                      <i className="icon-facebook"></i>
                    </Link>
                    <Link href="https://www.instagram.com/800b.battery/">
                      <i className="icon-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__usefull-link">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Company</h3>
                  </div>
                  <div className="footer-widget__link-box">
                    <ul className="footer-widget__link list-unstyled">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Service</h3>
                  </div>
                  <ul className="footer-widget__link list-unstyled">
                    {userServices.map((service) => (
                      <li>
                        <Link to={`/service/${service.slug}`}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Contact us</h3>
                  </div>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <h3>Address</h3>
                      <div className="content">
                        <p>
                          Al Asayel Street - 160St Warehouse no. 2 - 318th Rd -
                          near Al Ahli Driving school - Al Quoz Industrial Area
                          3 - Dubai
                        </p>
                      </div>
                    </li>
                    <li>
                      <h3>Contact</h3>
                      <div className="content">
                        <p>
                          <Link href="tel:+971509344668">+971 50 934 4668</Link>
                        </p>
                        <p>
                          <Link href="mailto:support@800bbattery.com">
                            support@800bbattery.com
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2024 by Barcode Auto Care LLC. All rights reserved.
              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                {/* <li><Link href="contact">Support</Link></li>
                            <li><Link href="about">Terms and Condition</Link></li>
                            <li><Link href="about">Privacy and Policy</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
