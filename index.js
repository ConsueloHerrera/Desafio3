const express = require("express");
const cors = require("cors");
const { obtenerRegistro, agregarRegistro } = require("./consulta");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/posts", async (req, res) => {
    const posts = await obtenerRegistro();
    console.log(posts)
    res.json(posts);
  });

  app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion, likes} = req.body;
    await agregarRegistro(titulo, img, descripcion, likes);
    res.send("Post agregado con éxito");
  });
