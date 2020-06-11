import React, { useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import FadeIn from 'react-fade-in'

let DayHour = ({ setFormulaStatus, orderContent, setOrderContent, setShift, cart }) => {


    useEffect(() => {
        setOrderContent({
            hour: '',
            day: '',
            formula: '',
            formulaPrice: 0,
            size: 1,
            bottle: '',
            bottlePrice: 0,
            moreDrink: [],
            moreDrinkTotal: 0,
            moreFood: [],
            moreFoodTotal: 0
        })
        if (cart.products.length > 0) {
            setFormulaStatus({ selectDayHour: false, selectFormula: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let chooseShift = e => {
        setOrderContent({ ...orderContent, hour: e.target.id, day: e.target.name, formatedDay: e.target.value })
        setShift({ hour: e.target.id, day: e.target.name, formatedDay: e.target.value })
        setFormulaStatus({ selectDayHour: false, selectZip: true })
    }

    const MyDay = () => {
        let options = []

        let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

        for (let i = 0; i < 8; i++) {
            let formatedDay = moment().add(i, 'days').format()
            let day = capitalize(moment().add(i, 'days').format('LLLL').slice(0, -11))
            let actualHour = new Date().getHours()

            // IF TODAY CHECK HOUR NOT TO PROPOSE EARLIER THEN TIME IT IS..
            if (i === 0 && (day.includes('Jeudi') || day.includes('Vendredi') || day.includes('Samedi'))) {
                options.push(
                    <span className='dateColumn' key={i}>
                        <h5 className='dayTitle'>{day}</h5>
                        {actualHour < 17 && <button onClick={chooseShift} value={formatedDay} id='17h - 17h45' name={day} className='chooseHour'>17h - 17h45</button>}
                        {actualHour < 18 && <button onClick={chooseShift} value={formatedDay} id='17h45 - 19h' name={day} className='chooseHour'>17h45 - 19h</button>}
                        {actualHour < 19 && <button onClick={chooseShift} value={formatedDay} id='19h - 19h45' name={day} className='chooseHour'>19h - 19h45</button>}
                        {actualHour < 20 && <button onClick={chooseShift} value={formatedDay} id='19h45 - 20h30' name={day} className='chooseHour'>19h45 - 20h30</button>}
                        {actualHour < 20 && <button onClick={chooseShift} value={formatedDay} id='20h30 - 21h15' name={day} className='chooseHour'>20h30 - 21h15</button>}
                    </span>
                )
                // IF WORKING DAY ELSE THAN TODAY, PROPOSE ALL SHIFTS
            } else if ((day.includes('Jeudi') || day.includes('Vendredi') || day.includes('Samedi'))) {
                options.push(
                    <span className='dateColumn' key={i}>
                        <h5 className='dayTitle'>{day}</h5>
                        <button onClick={chooseShift} value={formatedDay} id='17h - 17h45' name={day} className='chooseHour'>17h - 17h45</button>
                        <button onClick={chooseShift} value={formatedDay} id='17h45 - 19h' name={day} className='chooseHour'>17h45 - 19h</button>
                        <button onClick={chooseShift} value={formatedDay} id='19h - 19h45' name={day} className='chooseHour'>19h - 19h45</button>
                        <button onClick={chooseShift} value={formatedDay} id='19h45 - 20h30' name={day} className='chooseHour'>19h45 - 20h30</button>
                        <button onClick={chooseShift} value={formatedDay} id='20h30 - 21h15' name={day} className='chooseHour'>20h30 - 21h15</button>
                    </span>
                )
            }
        }
        return options
    }


    return (
        <FadeIn>
            <h4 className='shoppingProcessTitle'>Début de l'Apéro</h4>
            <h5 className='shoppingProcessTitle'>Créneaux de livraison (Bientôt Rond)</h5>
            <hr />
            <div className='chooseDateBlock'>
                <MyDay />
            </div>
        </FadeIn>
    )


}

export default DayHour

