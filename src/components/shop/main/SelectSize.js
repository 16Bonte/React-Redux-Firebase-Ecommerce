import React from 'react'

const SelectSize = ({ setOrderingStatus, orderContent, setOrderContent }) => {

    let { quantity } = orderContent

    let moreFood = () => {
        setOrderContent({...orderContent, quantity: quantity + 0.5})
        console.log(quantity)
    }

    let lessFood = () => {
        setOrderContent({...orderContent, quantity: quantity - 0.5})
    }

    let next = () => setOrderingStatus({ selectSize: false, selectBottle: true })

    return (
        <div className='formulaSize'>
            <h5>Quantité de délices gustatifs</h5>
            <h5>{2 * quantity} Personnes</h5>
            <button onClick={moreFood}>+</button>
            {quantity > 1 && <button onClick={lessFood}>-</button>}
            <button onClick={next}>Suivant</button>
        </div>
    )
}

export default SelectSize
