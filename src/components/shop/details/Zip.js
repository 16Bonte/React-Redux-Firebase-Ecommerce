import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in'

const Zip = ({ setFormulaStatus, orderContent, setOrderContent }) => {

    useEffect(() => {
        setOrderContent({
            ...orderContent,
            formula: '',
            formulaPrice: 0,
            size: 1,
            bottle: '',
            bottlePrice: 0,
            moreDrink: [],
            moreDrinkTotal: 0,
            moreFood: [],
            moreFoodTotal: 0
        })
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let chooseZip = e => {
        setOrderContent({ ...orderContent, zip: e.target.id })
        setFormulaStatus({ selectZip: false, selectFormula: true })
    }

    let previous = () => setFormulaStatus({ selectShift: true, selectZip: false })


    return (
        <FadeIn>
            <div className="headerShop">
                <div className='prevNext'><i className="material-icons left prevNext" onClick={previous}>arrow_back</i></div>
                <div>
                    <h4 className='shoppingProcessTitle'>Zone de livraison mon copain</h4>
                    <h5 className='shoppingProcessTitle'>Bientôt Rond</h5>
                </div>
            </div>
            <div className='zipList'>
                <span className='zipChoice' id='Lyon 1' onClick={chooseZip}>Lyon 1</span>
                <span className='zipChoice' id='Lyon 2' onClick={chooseZip}>Lyon 2</span>
                <span className='zipChoice' id='Lyon 4' onClick={chooseZip}>Lyon 4</span>
                <span className='zipChoice' id='Lyon 6' onClick={chooseZip}>Lyon 6</span>
                <span className='zipChoice' id='Lyon 9' onClick={chooseZip}>Lyon 9</span>
            </div>
        </FadeIn>
    )
}

export default Zip
