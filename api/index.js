import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.routes.js'

const app = express();
dotenv.config()

app.use(express.json())
const username = process.env.MONGODB_USERNAME;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${username}:${password}@${cluster}.uidoptj.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((error, req, res, next)=>{
  const statusCode= error.statusCode || 500;
  const message= error.message || "Internal Server Error";

  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})