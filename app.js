var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/getUsuarios", (req, res) => {
    return res.status(200).send("todo ok")
})
app.put("/modifiedUsuario", (req, res) => {
    return res.status(200).send("esto debe de ser la llamada a api")
})
app.delete("/eliminarUsuario/:id", (req, res) => {
    return res.status(200).send("esto debe de ser la llamada a api")
})
app.post("/addUsuario", (req, res) => {
    return res.status(200).send("esto debe de ser la llamada a api")
})


app.listen(port, function () {
    console.log(`servicio 4 funcionando en el puerto ${port}`)
});