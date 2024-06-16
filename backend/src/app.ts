import express, { Request, Response } from 'express';
import homeRouter from './routes/home.routes';
import guestRouter from './routes/guest.routes';
import { AppDataSource } from '../data-source';
import cors from 'cors';

const bodyParser = require('body-parser');

// to initialize the initial connection with
//the database, register all entities
// and "synchronize" database schema, call
//"initialize()" method of a newly created
//database once in your application bootstrap
AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((error) => console.log(error))

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Middleware für das Parsen von JSON-Anfragen
app.use(cors()); // Middleware für Cross-Origin Resource Sharing
app.use('/', homeRouter);
app.use('/guest', guestRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
