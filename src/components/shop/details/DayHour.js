import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/fr'


let DayHour = ({setFormulaStatus, orderContent, setOrderContent}) => {

    let chooseShift = e => {
        setOrderContent({...orderContent, shift: e.target.id})
        setFormulaStatus({selectDayHour: false, selectZip: true})
    }

    const MyDay = () => {
        let options = []
    
        let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    
        for (let i = 0; i < 6; i++) {
            let day = capitalize(moment().add(i, 'days').format('LLLL').slice(0, -11))
            if ((day.includes('Jeudi') || day.includes('Vendredi') || day.includes('Samedi'))) {
                options.push(
                    <span className='dateColumn' key={i}>
                        <h5 className='dayTitle'>{day}</h5>
                        <div onClick={chooseShift} id='17h - 17h45' className='chooseHour'>17h - 17h45</div>
                        <div onClick={chooseShift} id='17h45 - 19h' className='chooseHour'>17h45 - 19h</div>
                        <div onClick={chooseShift} id='19h - 19h45' className='chooseHour'>19h - 19h45</div>
                        <div onClick={chooseShift} id='19h45 - 20h30' className='chooseHour'>19h45 - 20h30</div>
                        <div onClick={chooseShift} id='20h30 - 21h15' className='chooseHour'>20h30 - 21h15</div>
                    </span>
                )
            }
        }
        return options
    }

    return (
        <Fragment>
        <h4 className='shoppingProcessTitle'>Choisir un Créneau</h4>
        <div className='chooseDateBlock'>
            <MyDay/>
        </div>
        </Fragment>
    )


}

export default DayHour

