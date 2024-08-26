
exports.handler = async function(event, context) {
   
  if (event.httpMethod === 'POST') {
    try {
      // Parse the incoming request body
      const requestData = JSON.parse(event.body);

      // Construct the request payload
      const payload = {
        customer_details: {
          customer_email: requestData.customer_email,
          customer_name: requestData.customer_name,
          customer_phone: requestData.customer_phone
        },
        link_amount: requestData.link_amount,
        link_auto_reminders: true,
        link_currency: "INR",
        link_expiry_time: new Date(new Date().getTime() + 24*60*60*1000).toISOString(), // 24 hours from now
        link_id: `link_${Date.now()}`,
        link_meta: {
          return_url: "http://localhost:8888/calculator",
          upi_intent: true
        },
        link_minimum_partial_amount: 20,
        link_notes: requestData.link_notes || {},
        link_notify: {
          send_email: true,
          send_sms: false
        },
        link_partial_payments: false,
        link_purpose: "Payment for PDF download"
      };

      const client_ID  = process.env.VITE_CASHFREE_TEST_CLIENT_ID
      const secret_KEY = process.env.VITE_CASHFREE_TEST_CLIENT_SECRET
      // Trigger the payment creation on Cashfree
      const response = await fetch('https://sandbox.cashfree.com/pg/links', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-api-version': '2023-08-01',
          'x-client-id': client_ID,
          'x-client-secret': secret_KEY
        },
        
        body: JSON.stringify(payload)
      });

      

      const data = await response.json();
console.log("data",data);
      if (data.status === 'OK') {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          },
          body: JSON.stringify({ paymentLink: data.payment_link })
        };
      } else {
        return {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          },
          body: JSON.stringify({ error: 'Payment creation failed' })
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow any origin
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          },
        body: JSON.stringify({ error: error.message })
      };
    }
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }
};
