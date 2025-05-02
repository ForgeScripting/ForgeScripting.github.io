const handler = async () => {
    try {
        const publicKey = process.env.STRIPE_PUBLIC_KEY;
  
        if (!publicKey) {
            return {
                statusCode: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    error: true,
                    message: 'Missing STRIPE_PUBLIC_KEY environment variable'
                })
            };
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: false,
                key: publicKey
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: true,
                message: error.message
            })
        };
    }
};
  
module.exports = { handler };