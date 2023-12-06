import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
