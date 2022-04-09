import express from 'express';

const router = express.Router();

export interface testReq {
  body:{
    name: string
    id: number
  }
}

router.post('/test', express.json(), (req:testReq, res, next) => {
  const {id, name} = req.body;
  res.send(JSON.stringify({
    id,
    name,
    description: `I am No.${id}, my name is ${name}`    
  }));
});

export default router;
