var express = require('express');
var app = express();
var userControler = require("./controllers/user_contrler")
var database = require("./models/conection")
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/getUsuarios", async (req, res) => {
    const resultado = await userControler.controlerUser.getAll();
    return res.status(200).send({ resultado })
})
app.put("/modifiedUsuario", async (req, res) => {
    const resultado = await userControler.controlerUser.modified({
        email:req.body.email,
        password: req.body.password
    })
    return res.status(200).send({resultado})
})
app.delete("/eliminarUsuario/:id", async (req, res) => {
    const resultado = await userControler.controlerUser.delete(req.params.id)
    return res.status(200).send({resultado})
})
app.post("/addUsuario", async (req, res) => {
    var email = req.body.email
    var password = req.body.password

    const resultado = await userControler.controlerUser.create({
        email: email,
        password: password,
    })
    return res.status(200).send({resultado})
})


app.listen(port, function () {
    console.log(`servicio 4 funcionando en el puerto ${port}`)
    database.testDb()
});