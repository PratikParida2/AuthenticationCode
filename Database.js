const mongoose=require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/Employee',{useNewUrlParser:true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://localhost:27017/Employee',{useNewUrlParser:true,
    useUnifiedTopology: true
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
});
module.exports=mongoose;
