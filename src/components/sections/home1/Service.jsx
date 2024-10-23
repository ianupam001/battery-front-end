import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServiceCard from '../../ServiceCard';

export default function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
      const fetchServices = async () => {
        const res = await fetch('/api/service/getServices');
        const blogpost = await res.json();
        setServices(blogpost.services);
      };
      fetchServices();
    }, []);

    return (
        <>
        {/*Services Two Start */}
        <section className="services-two">
            <div className="services-two__shape-1 img-bounce">
                <img src="https://firebasestorage.googleapis.com/v0/b/blogs-app-e2c7f.appspot.com/o/1729148539123-40'HC%20with%20dark%20blue%20(8).jpg?alt=media&token=7e47368a-defb-4a61-afa5-fa6cd052cb19" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <div className="section-title__title-box sec-title-animation animation-style1">
                        <h2 className="section-title__title title-animation">Current Solutions for Your<br/> Modern Problems
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {services.map((post) => (
                        <ServiceCard key={post._id} post={post}/>
   
                    ))}
                </div>
            </div>
        </section>
        {/*Services Two End */}
    
        </>
    )
}
