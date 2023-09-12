const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {

    // queryText for SELECT all fight_dates 
    //from the dates table
    const queryText = `SELECT 
    TO_CHAR("fight_dates", 'Month DD, YYYY') AS date
    FROM "dates"
    WHERE "fight_dates" > '09/12/2023';`;

    pool.query(queryText)
        .then((result) => {
            console.log('the result:', result.rows)
            res.send(result.rows)
        }).catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;