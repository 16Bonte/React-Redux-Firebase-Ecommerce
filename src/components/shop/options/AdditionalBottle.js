import React from 'react'

const AdditionalBottle = ({ name, price, index, orderContent, setOrderContent }) => {

    let addBottle = e => {
        let thatBottleArr = [...orderContent.moreDrink]
        if (thatBottleArr[index]) {
            thatBottleArr[index].quantity = thatBottleArr[index].quantity + 1
        } else {
            thatBottleArr[index] = { name: name, quantity: 1, price: parseInt(price) }
        }
        setOrderContent({
            ...orderContent,
            moreDrink: thatBottleArr,
            moreDrinkTotal: orderContent.moreDrinkTotal + parseInt(price)
        })
    }

    let removeBottle = e => {
        let thatBottleArr = [...orderContent.moreDrink]
        thatBottleArr[index].quantity = thatBottleArr[index].quantity - 1
        setOrderContent({
            ...orderContent,
            moreDrink: thatBottleArr,
            moreDrinkTotal: orderContent.moreDrinkTotal - parseInt(price)
        })
    }


    return (
        <div className='card' >
            <h3>{name}</h3>
            <h5>{price + ' €'}</h5>
            {([...orderContent.moreDrink][index] && [...orderContent.moreDrink][index].quantity > 0) &&
                <button onClick={removeBottle}>-</button>
            }
            <button onClick={addBottle}>+</button>
        </div>
    )
}

export default AdditionalBottle

