const axios = require('axios');

async function sendOrderToShopify(shopifyDomain, apiKey, password, orderData) {
  try {
    // Construct the Shopify API URL
    const apiUrl = `https://${apiKey}:${password}@${shopifyDomain}/admin/api/2021-07/orders.json`;

    // Send a POST request to the Shopify API with the order data
    const response = await axios.post(apiUrl, { order: orderData });

    // Extract the created order from the response
    const createdOrder = response.data.order;

    // Return the created order
    return createdOrder;
  } catch (error) {
    console.error('Error sending order to Shopify:', error);
    throw error;
  }
}

// Example usage
const shopifyDomain = '5b9251-2.myshopify.com';  //your shop domain
const apiKey = 'your key';
const password = 'your password';

const orderData = {
  // Specify the order details, such as line items, customer information, etc.
};

sendOrderToShopify(shopifyDomain, apiKey, password, orderData)
  .then((createdOrder) => {
    console.log('Created Order:', createdOrder);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
