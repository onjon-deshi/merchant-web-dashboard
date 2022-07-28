import {useEffect} from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';





var App = () => {
    
    useEffect(() => {
        $( "#fromDate" ).datepicker({
            defaultDate: "+1w",
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            gotoCurrent: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#toDate" ).datepicker( "option", "minDate", selectedDate );

                if( selectedDate !== "" ) {
                    $("#toDate").trigger("focus");
                }
            }
        });
        $( "#toDate" ).datepicker({
            defaultDate: "+1w",
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            gotoCurrent: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#fromDate" ).datepicker( "option", "maxDate", selectedDate );
            }
        });
    });

    return (
        <div id='date-range-div' style={{display: "none"}}>
            <div className='flex'>
                <input type="text" autoComplete='off' id="fromDate" placeholder="From Date" name="from" className='w-[49.5%] mr-1 float-left text-center'/>
                <input type="text" autoComplete='off' id="toDate" placeholder="To Date" name="to" className='w-[49.5%] float-left text-center' />
            </div>

            <style jsx="true">{`
            .ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next {
                height: 3em !important;
            }
            `}</style>
        </div>
    );
}


export default App;