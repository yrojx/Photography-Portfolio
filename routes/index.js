const express = require('express'),
    router = express.Router(),
    mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'inyourdream',
    database : 'fpwp'
})

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM portfolio', (err, rows, fields) => {
        if (err) throw err
        res.render('index',{
            'portfolio': rows
        })
    })
})

router.get('/details/:id', (req, res, next) => {
    connection.query(`SELECT * FROM portfolio WHERE id = ${req.params.id}`, (err, rows, fields) => {
        if (err) throw err
        res.render('details', {
            'portfolio': rows[0] 
        })
    })
})

module.exports = router