import { useState, useEffect } from "react";
import { ContactFormModal } from "../../elements/ContactFormModal";

export default function Banner() {
 
  const [isImageLoaded, setIsImageLoaded] = useState(false);

 
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
     
      <link rel="preload" href="assets/images/banner-mobile.jpeg" as="image" type="image/jpeg" />
      <link rel="preload" href="assets/images/banner-mobile-light.jpeg" as="image" type="image/jpeg" />
      
     
      <link rel="preload" href="assets/images/banner-desktop.jpeg" as="image" type="image/jpeg" />

      {/* Mobile Banner */}
      <section className="md:hidden relative flex flex-col">
        <div>
          <img
            
            src="assets/images/banner-mobile-light.jpeg"
            srcSet="assets/images/banner-mobile-light.jpeg 480w, assets/images/banner-mobile.jpeg 1200w"
            sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1200px"
            alt="Mobile Banner"
            className={`w-full transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
            loading="eager" 
            style={{ transition: 'opacity 1s ease-in-out' }} 
            onLoad={handleImageLoad} 
          />
        </div>
        <div className="-mt-10 flex justify-center mx-10">
          <ContactFormModal sourcePage="mobile" />
        </div>
      </section>

      {/* Desktop Banner */}
      <section className="hidden md:block">
        <div
          className="flex justify-between items-center"
          style={{
            backgroundImage: `url(assets/images/banner-desktop.jpeg)`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container flex justify-between items-center banner_sectio ">
            <div className="main-slider-three__content banner_content"></div>
            <div className="main-slider-three__content banner_form">
              <ContactFormModal sourcePage="desktop" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
