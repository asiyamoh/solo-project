const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body.firstname)
    console.log('hey POST addBoxer:', req.user.id);
    // I DID get this 😀


    //queryText to INSERT the new Member
    const queryText = `INSERT INTO Member(member_number, 
        firstname, lastname, birthdate, gender, 
        weight_class, region, coach_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);`

    //queryParams for the input values of the new Member
    const queryParams = [req.body.member_number, req.body.firstname,
    req.body.lastname, req.body.birthdate, req.body.gender, req.body.weight_class,
    req.body.region, 1]
    //I am hard codeing the coach_id
    //Need to fix that later 😞

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;