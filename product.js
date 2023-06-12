const axios = require('axios');

async function getProductsFromShopify(shopifyDomain, apiKey, password) {
  try {
    // Construct the Shopify API URL
    const apiUrl = `https://${apiKey}:${password}@${shopifyDomain}/admin/api/2021-07/products.json`;

    // Send a GET request to the Shopify API
    const response = await axios.get(apiUrl);

    // Extract the products from the response
    const products = response.data.products;

    // Return the products
    return products;
  } catch (error) {
    console.error('Error retrieving products from Shopify:', error);
    throw error;
  }
}

// Example usage
const shopifyDomain = '5b9251-2.myshopify.com';  //your shop domain
const apiKey = 'your key';
const password = 'your password';

getProductsFromShopify(shopifyDomain, apiKey, password)
  .then((products) => {
    console.log('Products:', products);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
