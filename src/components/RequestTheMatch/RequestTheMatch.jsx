import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import FightDates from './FightDates'
import PickYourBoxer from "./PickYourBoxer";



function RequestTheMatch() {
    
    const specificBoxer = useSelector(store => store.getSpecific)
    const fightDates = useSelector(storedate => storedate.fightDates)
    const chosenMember = useSelector(store => store.RequestMatchInput)
    console.log('the specificBoxer:', specificBoxer)
    console.log('the dateStore:', fightDates)
    console.log('Chosen Member Request:', chosenMember)

   const handleSubmit = () => {
    console.log('in HERE')
    console.log('Can we:')
   }



    return (
        <>
            <h1>Request the match</h1>
            <h3>
                {/* return specific detalis of the boxer */}
                {specificBoxer[0].firstname}
                {specificBoxer[0].lastname}
                {specificBoxer[0].weight_class}
                {specificBoxer[0].coach_name}
                {specificBoxer[0].fights_count}
            </h3>

            <div>
                <FightDates />
            </div>

            <div>
                <PickYourBoxer />
            </div>



            <button onClick={handleSubmit}>SUBMIT</button>

        </>
    )
}

export default RequestTheMatch