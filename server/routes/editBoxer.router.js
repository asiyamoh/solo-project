const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/:id', (req,res) => {
    console.log('id:', req.params.id)
   

    const id = req.params.id;
    const memberNumber = req.body.member_number;
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const birthdate = req.body.birthdate;
    const gender = req.body.gender;
    const weightClass = req.body.weight_class;
    const region = req.body.region;
    console.log('req body hey:', req.body)


    // queryText for updating member's info 
    //with the given id
    const queryText = `UPDATE "member"
    SET "member_number" = $1, 
    "firstname" = $2,
    "lastname" = $3,
    "birthdate" = $4,
    "gender" = $5,
    "weight_class" = $6,
    "region" = $7
    WHERE "id" = $8;`

    //queryparams for the new info of that member
    const queryParams = [memberNumber, firstName,lastName,birthdate,gender,weightClass,region, id]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('Error with the PUT', error)
            res.sendStatus(500)
        })
})




module.exports = router;