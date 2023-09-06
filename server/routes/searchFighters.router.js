const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/`, (req,res) => {
    console.log(req.query)
    let range1 = req.query.range1
    let range2 = req.query.range2
    let gender =  req.query.gender
    let region = req.query.region
    let birthdate = req.query.birthdate
    let numOfFights = req.query.numOfFights

    //queryText for all the given specific search
    const queryText = `SELECT member.firstname, member.lastname, 
    member.weight_class,
           COUNT(fights.id) AS fights_count
    FROM "member" 
    LEFT JOIN "fights"  ON member.id = fights.member_id_1 
    OR member.id = fights.member_id_2
    WHERE member."weight_class" BETWEEN $1 AND $2
      AND member."gender" = $3
      AND member."region" = $4
      AND member."birthdate" <= $5
    GROUP BY  member.firstname, member.lastname, member.weight_class
    HAVING COUNT(fights.id) < $6;`;

    //queryParams for the input values of the search 
    const queryParams = [range1,range2,gender,region,birthdate,numOfFights]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log('ERROR with GET search', error)
        })
})






module.exports = router;