import express from 'express'
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import createData from './controllers/data.controller.js';

const app = express()
const port = ENV.PORT || 3000;

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', createData );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB();
})
