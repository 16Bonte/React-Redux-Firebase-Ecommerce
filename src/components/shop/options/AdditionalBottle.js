import React, { useState } from 'react'

const AdditionalBottle = ({ name, price, index, orderContent, setOrderingStatus, setOrderContent }) => {

    let chooseBottle = e => {
        let thatBottleArr = [...orderContent.moreDrink]
        if (thatBottleArr[index]) {
            thatBottleArr[index].quantity = thatBottleArr[index].quantity + 1
        } else {
            thatBottleArr[index] = {name: name, quantity: 1, price: parseInt(price)}
        }
        setOrderContent({...orderContent, moreDrink: thatBottleArr })
        console.log([...orderContent.moreDrink])

        // setOrderingStatus({ selectBottle: false, selectMoreDrink: true })
    }

    return (
        <div className='card' id={name} onClick={chooseBottle}>
            <h3>{name}</h3>
            <h5>{price + ' €'}</h5>
        </div>
    )
}

export default AdditionalBottle

