const router = require('express').Router()
const conn = require('../connection/index')

// input connection
router.post('/connection' , (req,res) => {
    const sql = `insert into movcat (movie_id, category_id) values (${req.query.movie_id}, ${req.query.category_id})`
    const sql2 = `select * from movcat where id = ?`
    conn.query(sql,(err,result) => {
        if(err) return res.send(err)

        conn.query(sql2,result.insertId,(err,result2)=> {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

// delete connection
router.delete('/connection', (req,res) => {
    const sql = `delete from movcat where id = ?`
    const data = req.query.id

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        res.send('berhasil di delete')
    })
})

module.exports = router