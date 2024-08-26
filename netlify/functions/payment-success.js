exports.handler = async function (event, context) {
    if (event.httpMethod === 'GET') {
      try {
        // Handle cancellation
        const queryParams = event.queryStringParameters;
        console.log("event:",event)
      console.log('Query Parameters:', queryParams);
        return {
          statusCode: 302,
          headers: {
            Location: 'http://localhost:5173/payment-success',
          },
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Internal Server Error' }),
        };
      }
    } else {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  };
  