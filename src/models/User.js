import { Schema,model,models } from "mongoose";
const UserSchema = new Schema({
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String, 
        required : true,
    },
    department : {
        type : String,
        required : true
    }
}, {
    timestamps : true
}) 

export default models.User || model('User',UserSchema)