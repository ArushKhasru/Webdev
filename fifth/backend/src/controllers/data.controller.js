import User from "../models/data.js";


const createData = async(req,res)=>{
    try {
        const {name} = req.body;
        const newUser = new User({name});
        await newUser.save();
        res.status(201).json(newUser);
        console.log("sucess");
        
    } catch (error) {
        console.log(error)
        
    }
}
export default createData;