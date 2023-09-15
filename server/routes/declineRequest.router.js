const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.put('/:id', (req,res) => {

    const member1_id = req.body.member1_id;
    const member2_id = req.body.member2_id;
    const fightsId = req.params.id;

    const queryText = `
    UPDATE fights 
    SET "fight_status" = 'DECLINE'
    WHERE "member_id_1" = $1
    AND "member_id_2" = $2
    AND "fights"."id" = $3;`;

    const queryParams = [member1_id, member2_id, fightsId];

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            res.sendStatus(500);
            console.log('ERROR with the PUT decline Request:', error)
        })

})

module.exports = router;