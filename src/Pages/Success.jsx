import React from "react";
import { useNavigate } from "react-router-dom";
const Success = ({props}) => {

    const navigate = useNavigate();


 
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
            color: 'green',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Payment Successful
        </h1>
        <p
          style={{
            color: '#333',
            fontSize: '16px',
            marginBottom: '30px',
          }}
        >
          Your payment process was Successful. If you have any questions or need further assistance, please contact our support team.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
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

export default Success;
