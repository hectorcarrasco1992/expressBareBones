const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const user = require('../models/user')

module.exports ={
    getAllUsers :(req,res)=>{
        res.json(user)
    },

    getSingleUser :(req,res)=>{
        const existingUser = user.filter(users=>users.id === req.params.id)
        if(existingUser.length !== 0){
            return res.status(200).json(existingUser[0])
        }else{
            return res
            .status(418)
            .json(`${req.params.id} does not exist so quit playing`)
        }
        
    },



    createSingleUser :(req,res)=>{
        if(!req.body.name || !req.body.email) return res.status(418).json({message:"Please enter name and email"})
        
        const newUser ={}
        
        newUser.id = uuid()
        newUser.name = req.body.name,
        newUser.email = req.body.email
        user.push(newUser)
        return  res.json(req.body)
    },
    

    putUser: (req,res)=>{
        const existingUser = user.filter(user=>user.id === req.params.id)
        const updateUser =existingUser[0]
        if(existingUser.length !== 0){
            //const updatedUser = req.body
            const {name,email} = req.body
            if(updateUser.id === req.params.id){
                updateUser.name = name?name:updateUser.name;
                updateUser.email = email?email:updateUser.email;
                return res.status(200).json({message:'User updated',updateUser:updateUser})
            }
        }else{
            return res.status(418).json({message:`User with id ${req.params.id} does not exist`})
        }
    },

    deleteUser: (req,res)=>{
        const userExists = user.filter(user => user.id === req.params.id)
        const pickedUser =userExists[0]
    
        if(userExists.length !== 0){
            const deletedUser = user.indexOf(pickedUser)
            user.splice(deletedUser,1)
            return res.status(200).json({message: ` deleted`})
        }else {
            return res.status(418).json({message:`user with id ${req.params.id} does not exist`})
        }
    },
}
