import React from 'react'
import FadeIn from 'react-fade-in'

const SelectSize = ({ setFormulaStatus, orderContent, setOrderContent }) => {

    let { formula, size } = orderContent

    let moreFood = () => setOrderContent({ ...orderContent, size: size + 0.5 })

    let lessFood = () => setOrderContent({ ...orderContent, size: size - 0.5 })

    let previous = () => setFormulaStatus({ selectSize: false, selectFormula: true })

    let next = () => setFormulaStatus({ selectSize: false, selectBottle: true })

    return (
        <FadeIn>
            <div className='formulaSize'>
                <div className="headerShop">
                    <div className='prevNext'><i className="material-icons left prevNext" onClick={previous}>arrow_back</i></div>
                    <div>
                        <h4 className='shoppingProcessTitle'>Gestion Quantités Nourriture</h4>
                        <h5 className='shoppingProcessTitle'>{formula.name}{' '} (Bientôt Rond)</h5>
                    </div>
                </div>
                <div className="selectSize">
                    <h5>{2 * size} Personnes</h5>
                    {size > 1 && <i className="material-icons medium" onClick={lessFood}>remove_circle_outline</i>}
                    <i className="material-icons medium" onClick={moreFood}>add_circle_outline</i>
                    {formula.detail1Name && <h6>{formula.detail1Quantity * size} {formula.detail1Name}</h6>}
                    {formula.detail2Name && <h6>{formula.detail2Quantity * size} {formula.detail2Name}</h6>}
                    {formula.detail3Name && <h6>{formula.detail3Quantity * size} {formula.detail3Name}</h6>}
                    {formula.detail4Name && <h6>{formula.detail4Quantity * size} {formula.detail4Name}</h6>}
                    {formula.detail5Name && <h6>{formula.detail5Quantity * size} {formula.detail5Name}</h6>}

                </div>
                <button className="btn waves-effect black right" onClick={next}>Suivant
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </FadeIn>
    )
}

export default SelectSize
