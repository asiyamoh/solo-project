const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req,res) => {

    const queryText = `
    SELECT 
        location, 
        fight_dates, 
        weigh_in_time AS weigh_time, 
        show_time, 
        m1.firstname AS member1_firstname,
        m1.lastname AS member1_lastname,
        m1.id AS member1_id,
        m2.firstname AS member2_firstname,
        m2.lastname AS member2_lastname,
        m2.id AS member2_id
        FROM fights
    LEFT JOIN 
	    dates ON fights.fight_date = dates.id
    LEFT JOIN
        Member AS m1 ON fights.member_id_1 = m1.id
    LEFT JOIN
        Member AS m2 ON fights.member_id_2 = m2.id
    WHERE 
	    m1.coach_id = 3
    OR 
	    m2.coach_id = 3
    AND 
	    fight_status = 'ACCEPT';`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
            console.log('Upcoming Request:', result.rows)
        }).catch((error) => {
            res.sendStatus(500);
            console.log('ERROR with the GET upcoming matches:', error)
        })

})

module.exports = router;