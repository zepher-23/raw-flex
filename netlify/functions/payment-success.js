exports.handler = async function (event, context) {
    if (event.httpMethod === 'POST') {
      try {
        // Handle cancellation
        return {
          statusCode: 302,
          headers: {
            Location: '/payment-success',
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
  