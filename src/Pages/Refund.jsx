import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Refund = () => {
  return (<>
  <div className="main">
    <Navbar />
  <div className="p-6 max-w-4xl mx-auto my-28 text-left">
      <h1 className="text-3xl font-bold mb-4">Refund and Cancellation Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
        <p>
          Thank you for choosing RawFlex Calisthenics! This Refund and Cancellation Policy outlines the conditions under which you may request a refund or cancel a service. By using our services, you agree to the terms of this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Cancellation Policy</h2>
        <p>
          You may cancel your subscription or service at any time. Please note that cancellations are subject to the following conditions:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Subscription-based services, where you have ongoing access to our resources and support, are eligible for refunds as per our cancellation and refund policy outlined above.</li>
         
          <li>Any promotional or discounted services may have different cancellation terms, which will be specified at the time of purchase.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Refund Policy</h2>
        <p>
          Refunds will be processed based on the following criteria:
        </p>
        <ul className="list-disc list-inside mb-4">
        <li>One-time downloadable services, such as digital guides, plans, or materials, are not eligible for a refund once the download has been completed.</li>
       
          <li>Refund requests made within 7 days of purchase are eligible for a full refund, provided the service has not been used.</li>
          <li>Requests made after 7 days but before the end of the service period will be considered for a partial refund based on the unused portion of the service.</li>
          <li>Requests for refunds due to dissatisfaction with the service or any issues encountered should be submitted with a detailed explanation.</li>
        </ul>
        <p>
          Refunds will be issued to the original payment method used during the purchase.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. How to Request a Refund or Cancellation</h2>
        <p>
          To request a refund or cancellation, please contact us at <a href="mailto:support@rawflexcalisthenics.com" className="text-secondary">support@rawflexcalisthenics.com</a> with your order details and reason for the request. We will review your request and respond promptly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to This Policy</h2>
        <p>
          We reserve the right to update or modify this Refund and Cancellation Policy at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.
        </p>
      </section>
    </div>
    <Footer/>
  </div>
  </>);
};

export default Refund;
