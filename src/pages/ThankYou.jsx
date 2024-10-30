import React from "react";
import { Helmet } from "react-helmet-async";
import ThankYouMessage from "../components/ThankYouMessage";

export default function ThankYou() {
  const title = "Thank You Page";

  return (
    <>
      <Helmet>
        <title>{title} - 800 BBattery</title>
        <meta
          name="description"
          content="Thank you for getting in touch with 800 BBattery. We appreciate your message and will respond shortly."
        />
        {/* Event snippet for Leads conversion page */}
        <script>
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16732634052/EZjQCOeM0-MZEMT33qo-',
              'value': 1.0,
              'currency': 'AED'
            });
          `}
        </script>
      </Helmet>
      <ThankYouMessage />
    </>
  );
}
