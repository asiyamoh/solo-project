const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('', (req,res)  => {

    // queryText to get all members 
    //that have the same coach
    const queryText = `SELECT * FROM "member"
    WHERE "coach_id" = $1;`

     //I am hard codeing the coach_id
    //Need to fix that later 😞
    const queryParams = [1];

    pool.query(queryText,queryParams)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log('Error with the GET', error)
        })

})




module.exports = router;