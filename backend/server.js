const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mern1234',
    database: 'node'
})



app.get('/', (req, res) => {
    const sql = 'SELECT * FROM modeli ORDER BY Modeli_vetures'
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.post('/modeli', (req, res) => {
    const newModel = 'INSERT INTO `modeli`(`Modeli_vetures`) VALUES (?);'
    const values = [req.body.modelet]
    console.log(req.body.modelet)

    //    db.query(newModel, [values], (err, data) => {
       db.query(newModel, [values], (err, data) => {
        if(err) return res.json('Gabim gjate vendosjes se shenimeve te reja')
        return res.json(data)
    })
})


app.listen(5000, () => {
    console.log('Server started at 5000')
})