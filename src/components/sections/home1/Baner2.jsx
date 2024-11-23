import { ContactFormModal } from "../../elements/ContactFormModal";

export default function Banner() {
  return (
    <>
      {/* Mobile Banner */}
      <section className="md:hidden relative flex flex-col">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/blogs-app-e2c7f.appspot.com/o/battery-banner-mobile.jpeg.jpg?alt=media&token=fb342356-0931-4c02-949b-622b207723c5"
            alt="Mobile Banner"
            className="object-cover"
            width="100%"
            height="auto"
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
          <div className="container flex justify-between items-center banner_section">
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
