import React from 'react'

const RecapItem = ({ item }) => {

    let {
        formula,
        size,
        bottle,
        bottlePrice,
        moreDrink,
        moreFood,
    } = item

    let {
        detail1Quantity,
        detail1Name,
        detail2Quantity,
        detail2Name,
        detail3Name,
        detail3Quantity,
        detail4Quantity,
        detail4Name,
        detail5Quantity,
        detail5Name
    } = formula

    return (
        <div>
            <h5>{formula.name}</h5>
            <h5>{2 * size} Personnes</h5>
            {detail1Name &&
                <h6>{detail1Quantity * size} {detail1Name}</h6>}
            {detail2Name && <h6>{detail2Quantity * size} {detail2Name}</h6>}
            {detail3Name && <h6>{detail3Quantity * size} {detail3Name}</h6>}
            {detail4Name && <h6>{detail4Quantity * size} {detail4Name}</h6>}
            {detail5Name && <h6>{detail5Quantity * size} {detail5Name}</h6>}
            <h6>Bouteille d'accompagnement: {bottle} {bottlePrice !== 0 && (+ { bottlePrice })}</h6>
            {moreDrink.map((drink, i) => {
                if (drink) {
                    return <h6 key={i}>{drink.quantity} {drink.name} (+ {drink.quantity * drink.price} €)</h6>
                }
                return null
            })}
            {moreFood.map((food, i) => {
                if (food) {
                    return <h6 key={i}>{food.quantity} {food.name} (+ {food.quantity * food.price} €)</h6>
                }
                return null
            })}


        </div>
    )
}

export default RecapItem
