import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup= async (req, res)=>{
    const {username, email, password}=req.body
    if(username == "" || email == "" || password == "" || !username || !email ||!password){
        res.json("All fields are required !")
    }

    const hashedPassword=bcryptjs.hashSync(password,10)
const newUser = new User({
    username,
    email,
    password:hashedPassword
})

try {
    await newUser.save();
    res.status(200).json({message:"User created successfully"})
} catch (error) {
    res.status(409).json({message:error.message})
}

}