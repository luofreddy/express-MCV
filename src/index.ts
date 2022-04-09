import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import router from './app/app.routing';

const app = express();

dotenv.config({
  path: path.resolve(__dirname, `../environments/${ process.env.NODE_ENV }.env`)
});


app.get('/', (req, res, next) => {
  res.send('<h1>Hello, world</h1>');
});

app.use('/', router);

const serverPort = process.env.PORT;

app.listen(serverPort, ()=>{
  console.log('http server is running at http://localhost:' + serverPort);
});

