const { response, request } = require("express")

const Product = require('../models/product');

const postProduct = async (req = request, res = response) => {
    const { name, cost, stock, salePrice } = req.body;

    const productDB = await Product.findOne({ name });
    if (productDB) {
        return res.status(400).json({
            ok: false,
            msg: 'Producto ya existe en base de datos'
        })
    }

    const data = { name, cost, stock, salePrice };

    const product = new Product(data);

    await product.save();
    res.status(201).json({
        ok: true,
        product

    })
}



const putProducto = async(req=request, res=response)=>{

    const {id} = req.params;
    const data= req.body;

    const productToModify= await Product.findById(id);
    if(!productToModify){
        return res.status(404).json({
            ok:false,
            msg:'Producto no encontrado'
        })
    }

    const modifiedProduct = await Product.findByIdAndUpdate(id,{ purchase: Date.now(), ...data},{new:true});
    res.status(201).json({
        ok:true,
        producto: modifiedProduct
    })

}


const getProduct = async (req, res)=>{
    const products = await Product.find();
    res.status(200).json({
        ok:true,
        products
    })
}

const deleteProduct = async (req, res)=>{
    const id = req.params.id;

    const product = Product.findById(id);

    if(!product){
        res.status(404).json({
            ok: false,
            msg:' Producto no se pudo encontrar en la base de datos '
        })
    }

    await Product.findByIdAndDelete(id, {new:true});

    res.status(200).json({
        ok:true,
        msg:'Producto borrado'
    })
}




module.exports = {
    postProduct,
    putProducto,
    getProduct,
    deleteProduct
}