exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      key: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};