const mongoose=require('mongoose');
//It's Just A Blueprint Of Database Schema Like A Class 
const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const Employee=mongoose.model('Employee',employeeSchema);
module.exports=Employee;
