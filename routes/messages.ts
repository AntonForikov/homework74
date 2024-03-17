import express from 'express';
import {promises as fs} from 'fs';
import fileDB from '../fileDB';

const messagesRouter = express.Router();
// const messages: Message[] = [];

messagesRouter.get('/', async (req, res) => {
  const result = await fileDB.getData();

  return res.send(result);
});

// messagesRouter.get('/:id', (req, res) => {
//   return res.send(`Here is message by id: ${req.params.id}`);
// });

messagesRouter.post('/', async (req, res) => {
  const message = {
    message: req.body.message,
    date: new Date().toISOString()
  };

  try {
    await fs.writeFile(`./messages/${message.date}.txt`, JSON.stringify(message, null, 2));
  } catch (e) {
    console.error(e);
  }

  return res.send('OK!');
});

export default messagesRouter;