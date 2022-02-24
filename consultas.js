const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "2619",
  database: "peliculasyseries",
  port: 5432,
});
async function nuevoUsuario(id) {
  try {
    const result = await pool.query(
      `INSERT INTO usuarios (nombre, email) values ('${id}') RETURNING *`
    );
    return result.rows;
  } catch (e) {
    return e;
  }
}
async function getUsuarios() {
  try {
    const result = await pool.query(`SELECT * FROM usuarios`);
    return result.rows;
  } catch (e) {
    return e;
  }
}
async function editUsuario(id, nuevoNombre) {
  try {
    const res = await pool.query(
      `UPDATE usuarios SET nombre = '${nuevoNombre}' WHERE id = '${id}'
RETURNING *`
    );
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
async function deleteUsuario(id) {
  try {
    const result = await pool.query(`DELETE FROM usuarios WHERE id ='${id}'`
    );
    return result.rowCount;
  } catch (e) {
    return e;
  }
}

module.exports = {
  nuevoUsuario,
  getUsuarios,
  editUsuario,
  deleteUsuario,
};
