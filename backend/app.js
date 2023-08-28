import { config } from 'dotenv';
import express from 'express';

const app = express();
config();


app.listen(process.env.PORT,()=>{
  console.log("server started listening on PORT: ",process.env.PORT)
});