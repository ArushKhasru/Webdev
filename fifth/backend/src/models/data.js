import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:{
        type:String,
    }
})
const User = mongoose.model('User', user);
export default User;