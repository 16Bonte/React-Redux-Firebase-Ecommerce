import React from 'react'
import FadeIn from 'react-fade-in';


const Recap = ({ orderContent, total }) => {

    let { formula, size, bottle, bottlePrice, moreDrink, moreFood } = orderContent

    let {
        detail1Name,
        detail1Quantity,
        detail2Name,
        detail2Quantity,
        detail3Name,
        detail3Quantity,
        detail4Name,
        detail4Quantity,
        detail5Name,
        detail5Quantity
    } = formula

    return (
        <FadeIn delay={100}>
            <div className='formulaCart'>
                <h4>{formula.name}</h4>
                {detail1Name &&
                    <FadeIn delay={100}>
                        <li>{detail1Quantity * size} {detail1Name} </li>
                    </FadeIn>}
                {detail2Name &&
                    <FadeIn delay={140}>
                        <li>{detail2Quantity * size} {detail2Name} </li>
                    </FadeIn>}
                {detail3Name &&
                    <FadeIn delay={180}>
                        <li>{detail3Quantity * size} {detail3Name} </li>
                    </FadeIn>}
                {detail4Name &&
                    <FadeIn delay={220}>
                        <li>{detail4Quantity * size} {detail4Name} </li>
                    </FadeIn>}
                {detail5Name &&
                    <FadeIn delay={260}>
                        <li>{detail5Quantity * size} {detail5Name} </li>
                    </FadeIn>}
                {bottle &&
                    <FadeIn>
                        <li>Bouteille accompagnant la formule: {bottle} {bottlePrice !== 0 && `(+ ${bottlePrice})`}</li>
                    </FadeIn>
                }
                {moreDrink.filter(drink => drink).map((drink, i) =>
                    <FadeIn key={i}>
                        {drink.quantity > 0 &&
                            <li >{drink.name}: {drink.quantity} x {drink.price} euros </li>
                        }
                    </FadeIn>
                )}
                {moreFood.filter(food => food).map((food, i) =>
                    <FadeIn key={i}>
                        {food.quantity > 0 &&
                            <li>{food.name}: {food.quantity} x {food.price} euros </li>
                        }
                    </FadeIn>
                )}
                <FadeIn delay={300}><h5>Total: {total} euros</h5></FadeIn>

            </div>
        </FadeIn>
    )
}

export default Recap