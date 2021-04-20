import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import routes from './routes/index';

const app = express();

app.use([express.json(), cors(), routes]);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

export default app;
