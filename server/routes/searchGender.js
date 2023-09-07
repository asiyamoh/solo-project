const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/`, (req,res) => {
    let gender = req.query[0]
    console.log('gender:', req.query[0])

    //queryText for all the given gender search
    const queryText = `SELECT member.firstname, member.lastname, 
    member.weight_class, member.id,
    COUNT(fights.id) AS fights_count
    FROM "member"
    LEFT JOIN "fights"  ON member.id = fights.member_id_1 
    OR member.id = fights.member_id_2
    WHERE "gender" like $1
    GROUP BY  member.firstname, member.lastname, member.weight_class, member.id;`;

    const queryParams = [gender]

    pool.query(queryText,queryParams)
        .then((result) => {
            console.log('result:', result.rows)
            res.send(result.rows)
        }).catch((error) => {
            res.sendStatus(500);
            console.log('error:', error)
        })
})



module.exports = router;