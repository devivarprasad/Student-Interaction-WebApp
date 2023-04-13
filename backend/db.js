const mongoose = require('mongoose');
const dbURL="mongodb+srv://Ekalavya:Ekalavya123@cluster0.jdljg9r.mongodb.net/student?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(dbURL,{useNewUrlParser:true},async(err,res) =>{
        if(err) console.log("---",err)
        else{
            console.log('Mongo connected');
            const fetched_data = await mongoose.connection.db.collection("Skills");
            fetched_data.find({}).toArray(async function(err, data) {
                    if(err) console.log(err);
                    else{
                        global.Skills=data[0].Skills;
                        console.log(Skills)
                    }
                })
            console.log('Mongo connected');
        }
    });
}

module.exports = connectDB;


