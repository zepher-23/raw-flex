import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css"

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="privacy-main p-6 max-w-4xl mx-auto my-28 text-left">
      <h1> Our Privacy Policy</h1>
      <p className="text-secondary">Effective Date: August 22, 2024</p>

      <h2>Introduction</h2>
      <p>
        Welcome to RawFlex Calisthenics. We value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our services,
        including our website, mobile applications, and products.
      </p>

      <h2> Information We Collect</h2>
      <p>
        We may collect the following types of information:
        <ul>
          <li>
            <strong>Personal Information:</strong> This includes your name, email address, phone number, and payment
            details, which you provide when purchasing our products, signing up for our services, or contacting us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with our website and services, such as IP
            addresses, browser types, device information, and pages visited.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience on our website
            and track usage patterns.
          </li>
        </ul>
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
        <ul>
          <li>Process and manage your orders, payments, and subscriptions.</li>
          <li>Provide customer support and respond to your inquiries.</li>
          <li>Improve our products, services, and website functionality.</li>
          <li>Send promotional emails and updates, which you can opt-out of at any time.</li>
          <li>Comply with legal obligations and enforce our terms of service.</li>
        </ul>
      </p>

      <h2> Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. However, we may share your information with
        trusted partners, including:
        <ul>
          <li>
            <strong>Payment Processors:</strong> We use third-party services to process payments securely.
          </li>
          <li>
            <strong>Service Providers:</strong> Partners who assist in delivering our services, such as hosting,
            analytics, and marketing.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law, we may share your information to comply with legal
            processes or protect our rights.
          </li>
        </ul>
      </p>

      <h2> Data Security</h2>
      <p>
        We implement appropriate security measures to protect your data from unauthorized access, alteration, or
        disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>

      <h2> Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal information at any time. To exercise these rights,
        please contact us at [Your Contact Information].
      </p>

      <h2> Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify
        you of significant updates via email or our website.
      </p>

      <h2> Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <em className="text-secondary">support@rawflexcalisthenics.in</em>.
      </p>
    </div>
    <Footer/>

    </>
  );
};

export default Privacy;

