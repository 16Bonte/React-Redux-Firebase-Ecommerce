import React from 'react'

const BottleFormula = ({ name, price, orderContent, setOrderingStatus, setOrderContent }) => {

    let chooseBottle = () => {
        setOrderingStatus({ selectBottle: false, selectMoreDrink: true })
        setOrderContent({ ...orderContent, bottle: name, bottlePrice: parseInt(price)})
    }

    return (
        <div className='card' onClick={chooseBottle}>
            <h3>{name}</h3>
            <h5>{price === '0' ? 'Gratuit' : '+ ' + price + ' €'}</h5>
        </div>
    )
}

export default BottleFormula

