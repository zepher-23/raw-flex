import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();


  // Handler for retrying payment
  const handleRetry = () => {
    // Redirect to the payment page or handle retry logic here
    navigate('/calculator'); // Update with your payment page route
  };

  // Handler for navigating back to the home page
  const handleGoHome = () => {
    navigate('/calculator'); // Update with your home page route
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
      }}
    >
      <h1
        style={{
          color: '#FF4D4F',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Payment Canceled
      </h1>
      <p
        style={{
          color: '#333',
          fontSize: '16px',
          marginBottom: '30px',
        }}
      >
        Your payment process was canceled. If you have any questions or need further assistance, please contact our support team.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <button
          onClick={handleRetry}
          style={{
            backgroundColor: '#1CA953',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Retry Payment
        </button>
        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: '#ccc',
            color: '#333',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Cancel;
