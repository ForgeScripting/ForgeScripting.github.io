exports.handler = async function(event, context) {
  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([true, 'Missing STRIPE_PUBLISHABLE_KEY environment variable'])
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([false, publishableKey])
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([true, error.message])
    };
  }
};