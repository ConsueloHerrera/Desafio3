const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "likeme",
  allowExitOnIdle: true,
})

const obtenerRegistro = async () => {
    const consulta = "SELECT * FROM posts";
    const result = await pool.query(consulta);
    console.log(result.rows);
    return result.rows;
}

const agregarRegistro = async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
    const result = await pool.query(consulta, [titulo, img, descripcion, likes]);
    console.log("Post agregado con éxito");
  };

module.exports = {obtenerRegistro, agregarRegistro}