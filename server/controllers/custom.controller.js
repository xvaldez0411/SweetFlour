const Custom= require('../models/custom.model')

const CustomController = {

    create:(req,res)=>{
        Custom.create(req.body)
        .then((custom)=>{
            res.status(201).json({custom:custom})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong creating custom", error:err})
        })
    },

    getAll:(req,res)=>{
        Custom.find({})
        .then((customs)=>{
            res.status(200).json({customs:customs})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong getting all customs", error:err})
        })
    },

    getOne:(req,res)=>{
        Custom.findOne({_id:req.params.id})
        .then((custom)=>{
            res.status(200).json({custom:custom})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong getting custom", error:err})
        })
    },

    update:(req,res)=>{
        Custom.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then((custom)=>{
            res.status(200).json({updatedCustom:custom})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong updating custom", error:err})
        })
    },
    
    delete:(req,res)=>{
        Custom.deleteOne({_id:req.params.id})
        .then((custom)=>{
            res.status(200).json({deletedCustom:custom})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong deleting custom", error:err})
        })
    }

}

module.exports = CustomController