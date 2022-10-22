import {dbConnect} from '../../../utils/mongoose'
import Bonus from 'models/Bonus'

dbConnect()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req,res){
  const {method,body} = req
  /*
    */
  switch(method){
    case "GET":
      try{
        const bonus = await Bonus.find()
        if(!bonus)
            return res.status(404).send({message:'Bonus not found'})
        const response = await Bonus.findOne({_id : bonus.id}).populate('_idUser')
        return res.status(200).send(response)
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    case "POST":
      try{
        console.log(body)
        const newBonus = new Bonus(body)
        const savedBonus = await newBonus.save()
        return res.status(201).json(savedBonus)
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    default:
      return res.status(400).json({
        msg:'This method does not exits'
      })
  }

}