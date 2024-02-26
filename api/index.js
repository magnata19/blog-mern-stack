import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const app = express();

mongoose.connect(
  process.env.MONGO
).then(() => {
  console.log('Conectou ao banco com sucesso')
}).catch((err) => {
  console.log(err,"Deu ruim na conexão do banco.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
