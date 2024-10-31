import React, { useEffect } from "react";
import ThankYouMessage from "../components/ThankYouMessage";
import { Helmet } from "react-helmet-async";

export default function ThankYou() {
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "conversion",
        send_to: "AW-16732634052/EZjQCOeM0-MZEMT33qo-",
        value: 1.0,
        currency: "AED",
      });
      window.dataLayer.push({
        event: "conversion",
        send_to: "AW-16732634052/NZEMCLu34-MZEMT33qo-",
        value: 1.0,
        currency: "AED",
      });
    } else {
      console.warn("GTM dataLayer is not available");
    }
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title>Thank You Page - 800 BBattery</title>
          <meta
            name="description"
            content="Thank you for getting in touch with 800 BBattery. We appreciate your message and will respond shortly."
          />
          {/* Event snippet for Lead_Gen (2) conversion page */}
          <script>
            {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16732634052/NZEMCLu34-MZEMT33qo-',
              'value': 1.0,
              'currency': 'AED'
            });
          `}
          </script>
        </Helmet>
        <ThankYouMessage />
      </div>
    </>
  );
}
