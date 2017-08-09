import express from 'express';

const app = express();

app.route('/')
  .get((req,res) => {
    return res.json({
      msg: 'Bem-vindo a API do Museu do Audio'
    });
  });

export default app;
