import React from 'react'

const SelectSize = ({ setOrderingStatus, orderContent, setOrderContent }) => {

    let { formula, size } = orderContent

    let moreFood = () => setOrderContent({ ...orderContent, size: size + 0.5 })

    let lessFood = () => setOrderContent({ ...orderContent, size: size - 0.5 })

    let next = () => setOrderingStatus({ selectSize: false, selectBottle: true })

    return (
        <div className='formulaSize'>
            <h5>{formula.name}</h5>
            <h5>{2 * size} Personnes</h5>
            {formula.detail1Name && <h6>{formula.detail1Quantity * size} {formula.detail1Name}</h6>}
            {formula.detail2Name && <h6>{formula.detail2Quantity * size} {formula.detail2Name}</h6>}
            {formula.detail3Name && <h6>{formula.detail3Quantity * size} {formula.detail3Name}</h6>}
            {formula.detail4Name && <h6>{formula.detail4Quantity * size} {formula.detail4Name}</h6>}
            {formula.detail5Name && <h6>{formula.detail5Quantity * size} {formula.detail5Name}</h6>}
            <button onClick={moreFood}>+</button>
            {size > 1 && <button onClick={lessFood}>-</button>}
            <button onClick={next}>Suivant</button>
        </div>
    )
}

export default SelectSize
