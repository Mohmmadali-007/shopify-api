const request = require('request');
const express = require('express');
const app = express();
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

let apikey = "0f4ed2de1b397b6c6194ecd2b893ca06"
let pass = "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"
let endpoint = "orders"

let sendorder = {
    'method': 'POST',
    'url': `https://${apikey}:${pass}@5b9251-2.myshopify.com/admin/api/2020-10/${endpoint}.json`,
    'Headers': {
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
        "order":{
            "line_items":[
                {
                    "title":"test product order",
                    "price": 500,
                    "quantity": 2,
                    "tax_line":[
                        {
                            "price" : 10,
                            "rate": 1,
                            "title": "tax demo",
                        }
                    ]
                }
            ],
            "email": "testproduct@gmail.com",
            "tags": "good, best",
        }
    })
}
app.get("/sendorder", (req, res) => {
    request(sendorder, (error, responce) => {
        if (error) throw new Error(error);
        res.send(responce.body);
        console.log(responce.body);
    });
});

app.listen(3400);