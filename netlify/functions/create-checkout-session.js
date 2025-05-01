// Require Stripe library and set up with secret key from environment variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Serverless function handler
exports.handler = async function(event, context) {
  try {
    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Methods you accept (cards here)
      line_items: [
        {
          price_data: {
            currency: 'usd', // Currency (USD in this case)
            product_data: {
              name: 'Your Product', // Product name displayed to the user
            },
            unit_amount: 1000, // Amount to charge, in cents ($10.00)
          },
          quantity: 1, // Quantity of the product being purchased
        },
      ],
      mode: 'payment', // Mode (payment for one-time payments)
      success_url: 'https://forgescripting.github.io/success', // Redirect after successful payment
      cancel_url: 'https://forgescripting.github.io/cancel', // Redirect if payment is canceled
    });

    // Return the session ID to the frontend to redirect to Stripe Checkout
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }), // Send the session ID to the frontend
    };
  } catch (err) {
    // Handle any errors (like network issues or invalid keys)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }), // Send error message if something went wrong
    };
  }
};
