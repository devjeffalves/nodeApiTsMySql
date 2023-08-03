const express = require("express")
const app = express();

app.use(express.json());

import clientsRouter from './routes/clientsRouter';

app.use('/api/', clientsRouter);

export default app;

