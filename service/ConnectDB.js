import mongoose from 'mongoose'


export const connectDB = async() =>{
          await  mongoose.connect(process.env.MONGO_URI);
          await console.log(`the db is connect with ${mongoose.connection.host}`);
}

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


export default model = mongoose.model('info',schema);
