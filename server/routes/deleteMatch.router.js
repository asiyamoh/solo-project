const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/:id', (req,res) => {
    const fightId = req.params.id;

    const queryText = `DELETE FROM "fights"
    WHERE id = $1;`;

    const queryParams = [fightId];

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('ERROR with the DELETE MATCH:', error)
        })
})

module.exports = router;
