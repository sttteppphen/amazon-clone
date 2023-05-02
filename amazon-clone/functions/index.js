const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51N2KbEElaIcDU4sEjrxrswt75gRkZ41DgujMGIISWjz8mPvXUH6TAEfxXTlQ5vyYyF7GA75nJvZZwtPJBrAiW6ff00YkXHEceH')

//API

//API config
const app = express();
app.use(cors({ origin: true}));

//Middlewares
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))


app.post('/payments/create', async (request, response) => {
     const total = request.query.total;
     console.log('Payment Request Recieved BOOM! for this amount >>> ', total);

     const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
     });
    
     //OK created
     response.status(201).send({
        clientSecret: paymentIntent.client_secret,
     });

});

//Listen command
exports.api = functions.https.onRequest(app);


//example endpoint
//http://127.0.0.1:5001/clone-bef5c/us-central1/api
