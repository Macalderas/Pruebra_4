const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'tarea'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos con el ID:', connection.threadId);
});

// Consulta SQL
const sqlQuery = 'SELECT * FROM tarea';

// Ejecutar la consulta
connection.query(sqlQuery, (err, results, fields) => {
  if (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
    return;
  }

  // Mostrar los resultados
  console.log('Resultados de la consulta:', results);

  // Cerrar la conexión
  connection.end();
});