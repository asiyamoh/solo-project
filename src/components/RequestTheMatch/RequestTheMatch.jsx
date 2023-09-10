import { useSelector } from "react-redux"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangeCalendar } from '@mui/x-date-pickers';


function RequestTheMatch() {

    const store = useSelector(store => store.getSpecific)
    console.log('the store:', store)

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                    <DemoItem label="disabled">
                        <DateRangeCalendar
                            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                            disabled
                        />
                    </DemoItem>
                    <DemoItem label="readOnly">
                        <DateRangeCalendar
                            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                            readOnly
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>

            <button>SUBMIT</button>

        </>
    )
}

export default RequestTheMatch