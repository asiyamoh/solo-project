const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/:id', (req,res)  => {
    console.log('id:', req.params.id)
    let id = req.params.id;

    //queryText to DELETE Member with a given ID
    let queryText = `DELETE FROM "member" 
    WHERE "id" = $1;`;

    //queryParams for the speific Member ID
    let queryParams = [id];

    pool.query(queryText,queryParams)
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
        })
})



module.exports = router;