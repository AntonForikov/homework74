import express from 'express';
import fileDB from '../fileDB';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const result = await fileDB.getData();
  return res.send(result);
});

messagesRouter.post('/', async (req, res) => {
  const result = await fileDB.addMessage(req.body);
  return res.send(result);
});

export default messagesRouter;