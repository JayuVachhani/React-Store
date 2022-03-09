const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KZtKwIAzdUFyghzSDJRI7jg6wKH9JNlRzJkd3Rwbp5U9Y6OftPq7MtFn73K46vFYPW8E4QDxz95H7HRTLnBforU00fo6au20z')

// API

// AppConfig
const app = express();

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})
// API Routes
app.get('/', (_, response) => {
  response.status(200).send('Hello World')
})
app.post('/payment/create', async (request, response) => {
  try {
    const total = request.query.total;
    console.log("Total =",total)
    console.log(`Payment Request received for amount ${total}`)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
     
    });
    console.log(paymentIntent)
    response.send({
      clientSecret: paymentIntent.client_secret,
    })
    if (!paymentIntent) {
      throw new Error('Charge Unsuccessful')
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// Listen command
exports.api = functions.https.onRequest(app);
