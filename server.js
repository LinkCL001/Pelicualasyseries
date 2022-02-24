const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log(`Server On Puerto 3000`);
});

const {
  nuevoUsuario,
  getUsuarios,
  editUsuario,
  deleteUsuario,
} = require("./consultas");

app.post("/usuario", async (req, res) => {
  const { nombre } = req.body;
  const respuesta = await nuevoUsuario(nombre);
  res.send(respuesta);
});

app.get("/usuarios", async (_, res) => {
  const respuesta = await getUsuarios();
  res.send(respuesta);
});

app.put("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const respuesta = await editUsuario(id, nombre);
  res.send(respuesta);
});

app.delete("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const respuesta = await deleteUsuario(id);
  respuesta > 0
    ? res.send(`El usuario de id ${id} fue eliminado con éxito`)
    : res.send("No existe un usuario registrado con ese id");
});
