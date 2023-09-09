const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/:id', (req,res) => {
    console.log('id:', req.params.id)
    console.log('req body:', req.body)

    const id = req.params.id;
    const memberNumber = req.body.memberNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birthdate = req.body.birthdate;
    const gender = req.body.gender;
    const weightClass = req.body.weightClass;
    const region = req.body.region;


    const queryText = `UPDATE "member"
    SET "member_number" = $1, 
    "firstname" = $2,
    "lastname" = $3,
    "birthdate" = $4,
    "gender" = $5,
    "weight_class" = $6,
    "region" = $7
    WHERE "id" = $8;`

    const queryParams = [memberNumber, firstName,lastName,birthdate,gender,weightClass,region, id]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200)
            console.log('result', result.rows)
        }).catch((error) => {
            console.log('Error with the PUT')
            res.sendStatus(500)
        })
})




module.exports = router;