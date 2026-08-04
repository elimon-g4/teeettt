import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const varialellll= null;
app.get('/', (_req, res) => {
  res.json({ message: 'Servidor Express funcionando' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});