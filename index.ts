import express from 'express';
import messagesRouter from './routes/messages';
import fileDB from './fileDB';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages', messagesRouter);

const run = async () => {
  await fileDB.init();

  app.listen(port, () => {
    console.log(`Server run on port: ${port}.`)
  });
}

void run();