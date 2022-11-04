const Signature= require('../models/signature.model')

const SignatureController = {

    create:(req,res)=>{
        Signature.create(req.body)
        .then((signature)=>{
            res.status(201).json({signature:signature})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong creating signature", error:err})
        })
    },

    getAll:(req,res)=>{
        Signature.find({})
        .then((signatures)=>{
            res.status(200).json({signatures:signatures})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong getting all signatures", error:err})
        })
    },

    getOne:(req,res)=>{
        Signature.findOne({_id:req.params.id})
        .then((signature)=>{
            res.status(200).json({signature:signature})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong getting signature", error:err})
        })
    },

    update:(req,res)=>{
        Signature.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then((signature)=>{
            res.status(200).json({updatedSignature:signature})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong updating signature", error:err})
        })
    },
    
    delete:(req,res)=>{
        Signature.deleteOne({_id:req.params.id})
        .then((signature)=>{
            res.status(200).json({deletedSignature:signature})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong deleting signature", error:err})
        })
    }

}

module.exports = SignatureController