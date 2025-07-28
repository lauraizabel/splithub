import 'reflect-metadata';
import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
