const stripeSecretkey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretkey, stripePublicKey)

const express = require('express')
const res = require('express/lib/response')
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/store', function(req, res) {
    fs.readFile('items.json', function(error, data) {
        if(error) {
            res.status(500).end()
        } else {
            req.render('store.ejs', {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    }) 
})

app.listen(3000)