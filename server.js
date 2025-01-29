const express=require('express');
const mongoose=require('mongoose');
const Employee=require('./Employee');
const db=require('./Database');
const port=3000;
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Pratik How Are You');
});

//MidlleWare
const middleWareFunction=(req,res,next)=>{
    console.log('Time:',Date.now());
    next();
};

//For Global Middleware
// app.use(middleWareFunction);

app.post('/employees',async(req,res)=>{
    // const newEmployee=new Employee(
    //     {
    //         name:"Pratik Parida",
    //         position:"SDE2",
    //         office:"Google India",
    //         salary:1300000
    //     }
    // );

    // try{
    //     const response=await newEmployee.save();
    //     console.log('data saved');
    //     res.status(200).json(response);
    // }
    // catch(err){
    //     console.log(err);
    //     res.status(500).json({error:'Internal Server Error'});
    // }

    try{
        const data = req.body
        const newEmployee = new Employee(data);
        const response = await newEmployee.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/employees',middleWareFunction,async(req,res)=>{
   try{
    const data = await Employee.find();
    console.log('data fetched');
    res.status(200).json(data);
   }
   catch(err)
   {
     console.log(err);
     res.status(500).send('Internal Server Error');
   }

});
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

