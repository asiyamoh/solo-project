import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState} from "react";


import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';





function RequestTheMatch() {

    const dispatch = useDispatch();

    const [date, setDate] = useState('')

    const store = useSelector(store => store.getSpecific)
    const storeDate = useSelector(storedate => storedate.fightDates)
    console.log('the store:', store)
    console.log('the dateStore:', storeDate)


    useEffect(() => {
        getDates()
    }, [])

    const getDates = () => {
        dispatch({
            type: 'GET_DATES'
        })
    }


    return (
        <>
            <h1>Request the match</h1>
            <h3>
                {/* return specific detalis of the boxer */}
                {store[0].firstname}
                {store[0].lastname}
                {store[0].weight_class}
                {store[0].coach_name}
                {store[0].fights_count}
            </h3>

            <h2>PICK A DATE</h2>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem label="Uncontrolled calendar">
                        <DateCalendar defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                    <DemoItem label="Controlled calendar">
                        <DateCalendar value={dayjs(storeDate)}/>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider> */}



            <button>SUBMIT</button>

        </>
    )
}

export default RequestTheMatch