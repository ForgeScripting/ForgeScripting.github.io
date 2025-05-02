exports.handler = async () => {
  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      throw new Error('Missing STRIPE_PUBLISHABLE_KEY environment variable');
    }

    return [false, publishableKey]
  } catch (error) {
    return [true, error.message]
  }
};

export function getPublicKey() {
  return "edit me";
}