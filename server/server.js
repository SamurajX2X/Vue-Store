const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const path = require('path')


const json = require('./data.json')

const promotions = json.promotions
// console.log(promotions);


app.get('/promotions', (req, res) => res.json({ promotions }))

app.get('/promotion/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    const promotion = promotions.find(promotion => promotion.id === id)
    if (promotion) {
        res.json({ promotion })
    } else {
        res.status(404).send('Promotion not found')
    }
})
app.get("/product/:id", (req, res) => {
    const id = req.params.id
    const product = promotions.find(promotion => promotion.id === id)
    if (product) {
        res.json({ product })
    } else {
        res.status(404).send('Product not found')
    }
})
app.listen(3000, () => console.log('Server running on port 3000'))