const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req,res) => {

    const queryText = `
    SELECT
        member.id AS member_id,
        member.firstname AS first_name,
        member.lastname AS last_name,
        member.coach_id,
        fights.who_requested AS requested_id,
        fights.fight_status AS status,
        dates.location AS location,
        dates.fight_dates AS date
    FROM
        Fights 
    LEFT JOIN
        Member ON fights.member_id_1 = member.id 
    OR 
	    fights.member_id_2 = member.id
    LEFT JOIN
        "user" ON fights.who_requested = "user".id
    LEFT JOIN
        dates ON fights.fight_date = dates.id
    WHERE fights.who_requested = 3
    AND 
        coach_id = 1;`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            res.sendStatus(500)
            console.log('ERROR with the GET incoming request:', error)
        })
})


module.exports = router;