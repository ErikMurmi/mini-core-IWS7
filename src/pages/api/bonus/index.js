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
        const bonus = await Bonus.find({}).populate('_idUser');
        if(!bonus)
            return res.status(404).send({message:'Bonus not found'})
        return res.status(200).send(bonus)
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    case "POST":
      try{
        const bonus = new Bonus(req.body);
        await bonus.save();
        if(!bonus)
          return res.status(404).send({message : 'Bonus not created'})
        const reponse = await Bonus.findOne({ _id : bonus._id }).populate('_idUser')
        console.log( reponse )
        return res.send( reponse );
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    default:
      return res.status(400).json({
        msg:'This method does not exits'
      })
  }

}