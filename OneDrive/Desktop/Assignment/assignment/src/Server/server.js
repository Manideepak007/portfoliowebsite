const express = require("express");
const cors = require('cors');

const app = express();
const stripe = require("stripe")("sk_test_51PcDERApwgaya2rBXu2lipehUfiFvNMKCdr2yGCJjyV6Tpz5hCbhWnEFY7WPTewoDJVhDsHo9rtyuZ8TK3v1zJAX00yq1xcRpJ")

const route = express.Router();


app.use(express.json());
app.use(cors())

app.post("/api/create-checkout-session", async(req, res)=>{
    const product = req.body;

    const lineItems = product.value.map((product)=>({
        price_data:{
            currency : "inr",
            product_data : {
                name: product.product
            },
            unit_amount: product.price * 100,
        },
        quantity : 2
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/projectDashboard",
        cancel_url: "http://localhost:3000/projectDashboard"
    })

    res.json({id: session.id})
})


app.listen(7000, ()=>{
    console.log("server listening....")
})