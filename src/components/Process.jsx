import React from "react";

const Process = () => {
  return (
    <>
      {/* Process One Start */}
      <section className="process-one">
        <div
          className="process-one__bg jarallax"
          style={{
            backgroundImage: "url(assets/images/shapes/800-battery-03.png)",
            backgroundPosition: "center",
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container">
          <div className="section-title-three text-center sec-title-animation animation-style1">
            <div className="section-title-three__tagline-box justify-content-center">
              <div className="section-title-three__tagline-shape"></div>
              <span className="section-title-three__tagline">
                Car Battery Replacement at Your Location
              </span>
              <div className="section-title-three__tagline-shape"></div>
            </div>
            <h2 className="section-title-three__title title-animation">
              AVAILABLE 24 HOURS A DAY, ALL WEEK
            </h2>
          </div>
          <div className="row">
            {/* Process One Single Start */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-ac1"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">Up to 18 Months Warranty</h3>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-send"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  At Your Location in 25 Mins.
                </h3>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-setting"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">German Brands Batteries</h3>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-services"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  Pay in 4 Easy Installments
                </h3>
              </div>
            </div>
            {/* Process One Single End */}
          </div>
        </div>
      </section>
      {/* Process One End */}
    </>
  );
};

export default Process;
