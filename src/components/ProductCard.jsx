import { Link } from 'react-router-dom';

export default function ProductCard({ productrecent }) {
  return (

    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"  data-wow-delay="100ms">
    <div className="shop-page-one-single">
        <div className="img-box">
            <img    src={productrecent && productrecent.image} alt={productrecent && productrecent.title}/>
            {/* <div className="overlay-icon clearfix">
                <Link href="shop">
                    <i className="fa fa fa-heart"></i>
                </Link>
                <Link href="shop">
                    <i className=" fa fa fa-plus"></i>
                </Link>
            </div> */}
            <div className="rate-box">
                <h4>Best Product</h4>
            </div>
        </div>
        <div className="content-box">
            <div className="title">
                <h3><Link href="shop">{productrecent && productrecent.title}</Link></h3>
            </div>
            <div className="bottom-box">
                <div className="btn-box">
                    <Link to={`/product/${productrecent && productrecent.slug}`}>
                        <i className="fa fa fa-arrow-right"></i>
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}
