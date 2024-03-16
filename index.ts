import express from 'express';

const app = express();
const port = 8000

app.get('/messages', (req, res) => {
  return res.send('Here is messages!');
});

app.get('/messages/:id', (req, res) => {
  return res.send(`Here is message by id: ${req.params.id}`);
});

app.post('/messages', (req, res) => {
  return res.send('Add message here [POST]');
});

app.listen(port, () => {
  console.log(`Server run on port: ${port}.`)
});