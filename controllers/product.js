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




module.exports = {
    postProduct,
    putProducto
}