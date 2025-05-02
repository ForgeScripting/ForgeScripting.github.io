export function getPublicKey() {
  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      return [true, 'Missing STRIPE_PUBLISHABLE_KEY environment variable'];
    }

    return [false, publishableKey];
  } catch (error) {
    return [true, error.message];
  }
}