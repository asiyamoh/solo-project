const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req,res) => {
    const id = req.params.id
    console.log('id:', id)

    const queryText = `SELECT member.firstname, member.lastname, 
    member.weight_class, "user"."username" AS coach_name,
    COUNT(fights.id) AS fights_count
    FROM "member"
    LEFT JOIN "fights"  ON member.id = fights.member_id_1 
    OR member.id = fights.member_id_2
    RIGHT JOIN "user" ON "member"."coach_id" = "user"."id"
    WHERE "member"."id" = $1
    GROUP BY  member.firstname, member.lastname, member.weight_class,
    "user"."username";`

    const queryParams = [id]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('Error')
        })
    
})



module.exports = router;