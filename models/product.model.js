const mongoose=require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "please eneter the product name"]
        },

        quantity:{
            type:Number,
            required:true,
            defaulr:0
        },

        price:{
            type:Number,
            required:true
        },
        
        image:{
            type:String,
            required: false
        },
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model("Product",ProductSchema);

module.exports=Product;