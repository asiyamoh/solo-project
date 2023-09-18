const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const coachId = req.user.id
    console.log('They coachID:', coachId)

    const queryText = `SELECT * FROM "member"
    WHERE coach_id != $1;`

    const queryParams = [coachId];

    pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows);
            console.log('result:', result.rows);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('Error with the GET all members:', error)
        })
})


module.exports = router;