import React, { Fragment } from 'react'

const Products = ({ details, prodRef }) => {

    let {
        detail1Quantity,
        detail1Name,
        detail2Quantity,
        detail2Name,
        detail3Quantity,
        detail3Name,
        detail4Quantity,
        detail4Name,
        detail5Quantity,
        detail5Name
    } = prodRef

    let {
        moreDrink,
        moreFood
    } = details

    return (
        <div className='contain'>
            <h5>{prodRef.name} {details.formulaSize * 2} Personnes</h5>
            <h6>Bouteille principale: {details.bottle}</h6>
            {moreDrink.length > 0 &&
                <Fragment>
                    <h6>Bouteilles supplémentaire:</h6>
                    <span>{moreDrink.map((drink, i) => <div key={i}>{drink.quantity} {drink.name} (+{drink.price}€) <br /></div>)}</span>

                </Fragment>
            }
            <h6>Accompagnements:</h6>
            <p>
                {detail1Quantity && (details.formulaSize * detail1Quantity) + '  ' + detail1Name} <br />
                {detail2Quantity && (details.formulaSize * detail2Quantity) + '  ' + detail2Name} <br />
                {detail3Quantity && (details.formulaSize * detail3Quantity) + '  ' + detail3Name} <br />
                {detail4Quantity && (details.formulaSize * detail4Quantity) + '  ' + detail4Name} <br />
                {detail5Quantity && (details.formulaSize * detail5Quantity) + '  ' + detail5Name} <br />
            </p>
            {moreFood.length > 0 &&
                <Fragment>
                    <h6>Accompagnements supplémentaire:</h6>
                    <span>{moreFood.map((food, i) => <div key={i}>{food.quantity} {food.name} (+{food.price}€) <br /></div>)}</span>
                </Fragment>
            }
            


        </div>
    )
}

export default Products
