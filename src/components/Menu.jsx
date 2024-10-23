import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useRouter } from "next/router"
export default function Menu() {
    const [userServices, setUserServices] = useState([]);
    const [userProducts, setUserProducts] = useState([]);
    // const router = useRouter()
    useEffect(() => {
        const fetchServices = async () => {
          try {
            const res = await fetch(`/api/service/getservices?limit=5`);
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
            const res = await fetch(`/api/product/getproducts?limit=5`);
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

            <ul className="main-menu__list">
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li className="dropdown">
                    <Link to='/services'>Services</Link>
                    <ul>
                    {userServices.map((service) => (
                        <li><Link to={`/service/${service.slug}`} >
                        {service.title}
                      </Link></li>
                    ))}
                    
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to='/products'>Products</Link>
                    <ul>
                        {userProducts.map((product) => (
                            <li><Link to={`/product/${product.slug}`} >
                            {product.title}
                        </Link></li>
                        ))}
                    </ul>
                </li>
                <li>
                    <Link to='/blogs'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact-us'>Contact</Link>
                </li>
            </ul>
        </>
    )
}
