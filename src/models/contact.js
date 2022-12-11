const mongoose=require("mongoose");
const validator=require("validator");
 
const contactSchema= mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Erro("Invalid email")
            }
        }
    },
    subject:{
        type:String,
        required:true
       
    },
    message:{
        type:String,
        required:true 
    }

})

const Contact=mongoose.model("Contact",contactSchema);

module.exports=Contact;