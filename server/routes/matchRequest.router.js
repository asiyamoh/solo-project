const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req,res) => {
    const member1 = req.body.yourBoxer;
    const member2 = req.body.searchBoxer;
    const fightStatus = 'Requested';
    const whoRequested = req.body.whoRequested;
    const fightDate = req.body.fightDate;

    const queryText = `INSERT INTO "fights" (member_id_1, member_id_2, 
        fight_status, who_requested, fight_date)
        VALUES 
        ($1, $2, $3, $4, $5);`;
    
    const queryParams = [member1,member2,fightStatus,whoRequested,fightDate]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            req.sendStatus(500);
        })
})


module.exports = router;