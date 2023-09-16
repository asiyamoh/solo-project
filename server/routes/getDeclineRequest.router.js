const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req,res) => {
    const coachId = req.user.id;
    console.log('id:', coachId)


    const queryText = `
    SELECT
        m1.firstname AS member1_firstname,
        m1.lastname AS member1_lastname,
        m2.firstname AS member2_firstname,
        m2.lastname AS member2_lastname,
        m1.coach_id AS member1_coach_id,
        m2.coach_id AS member2_coach_id,
        fights.who_requested AS who_requested,
        fights.fight_status AS fight_status,
        fights.id AS fight_id,
        dates.location AS fight_date_location,
        dates.fight_dates AS fight_date
    FROM
        Fights
    LEFT JOIN
        Member AS m1 ON fights.member_id_1 = m1.id
    LEFT JOIN
        Member AS m2 ON fights.member_id_2 = m2.id
    LEFT JOIN
        dates ON fights.fight_date = dates.id
    WHERE 
    	fights.who_requested != $1  
    AND
	    (m1.coach_id = $1 OR m2.coach_id = $1)
    AND 
        fights.fight_status = 'DECLINE';`;

    const queryParams = [coachId]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows)
            // console.log('resulr:', result.rows)
        }).catch((error) => {
            res.senStatus(500);
            console.log('ERROR with the get get DECLINE:', error)
        })
})



module.exports = router;