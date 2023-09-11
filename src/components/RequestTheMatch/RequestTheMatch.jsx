import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import FightDates from './FightDates'


import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';





function RequestTheMatch() {

    const dispatch = useDispatch();

    const [date, setDate] = useState('');
    // const [value, setValue] = useState| null>(dayjs('2022-04-17'));

    const store = useSelector(store => store.getSpecific)
    const storeDate = useSelector(storedate => storedate.fightDates)
    console.log('the store:', store)
    console.log('the dateStore:', storeDate[0].fight_dates)


    useEffect(() => {
        getDates()
    }, [])

    const getDates = () => {
        dispatch({
            type: 'GET_DATES'
        })
    }

    const handleDateChange = (event) => {
        setDate(event);
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
                    <DemoItem label="PICK A DATE">
                        <DateCalendar value={date} onChange={handleDateChange} />
                    </DemoItem>
                    <DemoItem label="USA BOXING EVENTS">
                        <DateCalendar
                            value={storeDate}
                           disabledDates={(date) => !storeDate.includes(date.format('YYYY-MM-DD'))}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider> */}
            <FightDates/>



            <button>SUBMIT</button>

        </>
    )
}

export default RequestTheMatch