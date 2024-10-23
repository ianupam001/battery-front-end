import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import Breadcrumb from '../components/sections/home1/Breadcrumb';

export default function Products() {
    const title = 'Products';
    const breadcrumbs = [
        { name: 'Home', link: '/' },
        { name: 'Products' } // No link for the current page
    ];
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch('/api/product/getProducts');
        const blogpost = await res.json();
        setProducts(blogpost.products);
      };
      fetchProducts();
    }, []);

    return (
        <>
        <Breadcrumb title={title} breadcrumbs={breadcrumbs}/>
        {/*Blog One Start*/}
        <section className="shop-page-one">
            <div className="container">
                <div className="row">

                    <div className="col-xl-8 col-lg-6 col-md-6">
                        <div className="shop-page-one-content">
                            {/*Start Shop items*/}
                            {/* <div className="row">
                                <div className="col-xl-12">

                                    <div className="shop-page-top-info_inner">
                                        <div className="left-box">
                                            <p>Showing 1 - 9 of 30 results</p>
                                        </div>
                                        <div className="right-box">
                                            <div className="text">
                                                <p>Sort by:</p>
                                            </div>
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="popularity">Popularity</option>
                                                    <option value="1">Popularity 01</option>
                                                    <option value="2">Popularity 02</option>
                                                    <option value="3">Popularity 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            {/*End Shop items*/}

                            <div className="row">
                            {products && products.length > 0 &&  products.map((post) => (
                                <div className="col-xl-4">
                                <div className="shop-page-one-single">
                                    <div className="img-box">
                                        <img src={post.image} alt="Image"/>
                                    </div>
                                    <div className="content-box">
                                        <div className="title">
                                            <h3><Link to={`/product/${post.slug}`}>{post.title}</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            )
                        )}

                            </div>
                        </div>
                    </div>

                    {/*Start Shop Page One*/}
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="shop-page-one-sidebar">
                            {/*Start Single Sidebar Box*/}
                            <div className="shop-widget-single">
                                <div className="title">
                                    <h3>Popular Products</h3>
                                    <div className="border-bx"></div>
                                </div>
                                <ul className="popular-products-list clearfix">
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-1.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Digital multimeters are superior to analog multimeters</Link>
                                            </h3>
                                            <h6>$20.00</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-2.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Air Conditioning Tonnage helps determine.</Link></h3>
                                            <h6>$40.00</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="popular-products-img">
                                            <img src="assets/images/shop/product-v1-sidebar-3.png" alt="Awesome Image" />
                                        </div>
                                        <div className="popular-products-content">
                                            <h3><Link href="#">Helpful tools, insight, and encouragement</Link></h3>
                                            <h6>$18.00</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

                {/* <ul className="styled-pagination pdtop30 clearfix">
                    <li className="arrow prev">
                        <Link href="#"><span className="icon-arrow-right left"></span></Link>
                    </li>
                    <li className="active"><Link href="#">1</Link></li>
                    <li><Link href="#">2</Link></li>
                    <li><Link href="#">3</Link></li>
                    <li className="arrow next">
                        <Link href="#"><span className="icon-arrow-right right"></span></Link>
                    </li>
                </ul> */}
            </div>
        </section>
        </>
    )
}
