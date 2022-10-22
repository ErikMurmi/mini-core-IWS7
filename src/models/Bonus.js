import { Schema,model,models } from "mongoose";

const Bonuschema = new Schema({

    _idUser : {
        type : Schema.ObjectId,
        ref : 'User',
    },
    date : {
        type : String, 
        required : true,
    },
    bonus : {
        type : Number,
        required : true
    },
    reason : {
        type : String ,
        required: true
    }
}, {
    timestamps : true
}) 

export default models.Bonus || model('Bonus' , Bonuschema)