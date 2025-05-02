exports.handler = async function(event, context) {
  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Missing STRIPE_PUBLISHABLE_KEY environment variable'
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: publishableKey
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};