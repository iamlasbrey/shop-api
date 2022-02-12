const router = require('express').Router()
const Product = require('../models/Product')

//CREATE PRODUCT
router.post('/', async(req, res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json()
    }
})


//GET PRODUCT
router.get('/search/:id', async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)       
    } catch (error) {
        res.status(500).json()
    }
})

//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
