const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const coachId = req.user.id
    console.log('They coachID:', coachId)

    const queryText = `SELECT 
    Member.*, 
    COUNT(fights.id) AS fight_count,
    EXTRACT(YEAR FROM AGE(Member.birthdate)) AS age
    FROM Member
    LEFT JOIN fights ON Member.id = fights.member_id_1 OR Member.id = fights.member_id_2
    WHERE Member.coach_id != $1
    GROUP BY Member.id;`

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