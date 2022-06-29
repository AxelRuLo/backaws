var express = require('express');
var app = express();
const port = process.env.PORT || 3000
// var mysql = require('mysql2');
// var connection = mysql.createConnection({
//     host: '172.17.0.1',
//     user: 'root',
//     password: 'root',
//     database: 'vetcitas',
//     port: 3306
// });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.status(200).send("todo ok")
})
app.get("/prueba", (req, res) => {
    return res.status(200).send("esto debe de ser la llamada a api de vetcitas")
})


app.listen(port, function () {
    console.log(`servicio 4 funcionando en el puerto ${port}`)
    // connection.connect(function (error) {
        // if (error) {
            // throw error;
        // } else {
            // console.log('Conexion correcta.');
        // }
    // });
});