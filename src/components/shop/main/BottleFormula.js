import React, { useEffect } from 'react'

const BottleFormula = ({ name, price, orderContent, setFormulaStatus, setOrderContent }) => {

    useEffect(() => {
        setOrderContent(
            { ...orderContent, bottle: '', bottlePrice: 0 })
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    let chooseBottle = () => {
        setFormulaStatus({ selectBottle: false, selectMoreDrink: true })
        setOrderContent({ ...orderContent, bottle: name, bottlePrice: parseInt(price) })
    }

    return (
        <div className='card' onClick={chooseBottle}>
            <h3>{name}</h3>
            <h5>{price === '0' ? 'Gratuit' : '+ ' + price + ' €'}</h5>
        </div>
    )
}

export default BottleFormula

