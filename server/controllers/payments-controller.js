const PAYPAL_CLIENT_ID = "AXfaa-Y122mXfPVzl9wYKsN9F0BEyWJ2D8-OGSHagLrh4nNeQmoy5G3xFV4MfPMAYXC7k30p8yRfamp6"

exports.getApiKey = (req, res, next) => {
    res.json(PAYPAL_CLIENT_ID)
}