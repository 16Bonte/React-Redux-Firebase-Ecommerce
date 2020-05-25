import React from 'react'

const AdditionalFood = ({ name, price, index, orderContent, setOrderContent }) => {

    let addFood = e => {
        let thatFoodArr = [...orderContent.moreFood]
        if (thatFoodArr[index]) {
            thatFoodArr[index].quantity = thatFoodArr[index].quantity + 1
        } else {
            thatFoodArr[index] = { name: name, quantity: 1, price: parseInt(price) }
        }
        setOrderContent({
            ...orderContent,
            moreFood: thatFoodArr,
            moreFoodTotal: orderContent.moreFoodTotal + parseInt(price)
        })
    }

    let removeFood = e => {
        let thatFoodArr = [...orderContent.moreFood]
        thatFoodArr[index].quantity = thatFoodArr[index].quantity - 1
        setOrderContent({
            ...orderContent,
            moreFood: thatFoodArr,
            moreFoodTotal: orderContent.moreFoodTotal - parseInt(price)
        })
    }


    return (
        <div className='card' >
            <h3>{name}</h3>
            <h5>{price + ' €'}</h5>
            {([...orderContent.moreFood][index] && [...orderContent.moreFood][index].quantity > 0) &&
                <button onClick={removeFood}>-</button>
            }
            <button onClick={addFood}>+</button>
        </div>
    )
}

export default AdditionalFood

