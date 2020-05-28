import React, { Fragment } from 'react'

const Zip = ({ setFormulaStatus, orderContent, setOrderContent }) => {

    let chooseZip = e => {
        setOrderContent({ ...orderContent, zip: e.target.id })
        setFormulaStatus({ selectZip: false, selectFormula: true })
    }

    let previous = () => setFormulaStatus({ selectShift: true, selectZip: false })


    return (
        <Fragment>
            <button onClick={previous}>Précédent</button>
            <div className='zipList'>
                <span className='zipChoice' id='Lyon 1' onClick={chooseZip}>Lyon 1</span>
                <span className='zipChoice' id='Lyon 2' onClick={chooseZip}>Lyon 2</span>
                <span className='zipChoice' id='Lyon 4' onClick={chooseZip}>Lyon 4</span>
                <span className='zipChoice' id='Lyon 6' onClick={chooseZip}>Lyon 6</span>
                <span className='zipChoice' id='Lyon 9' onClick={chooseZip}>Lyon 9</span>
            </div>
        </Fragment>
    )
}

export default Zip
