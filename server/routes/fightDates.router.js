const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {

    // queryText for SELECT all fight_dates 
    //from the dates table
    const queryText = `SELECT "fight_dates" FROM "dates";`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;