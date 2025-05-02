exports.handler = async () => {
  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      throw new Error('Missing STRIPE_PUBLISHABLE_KEY environment variable');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        key: publishableKey,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};