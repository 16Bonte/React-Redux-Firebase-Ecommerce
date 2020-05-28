import React from 'react'
import Product from './Formula'


let Main = ({ products, setFormulaStatus, setOrderContent, orderContent, cart }) => {

    let previous = () => {
        setFormulaStatus({ selectFormula: false, selectZip: true })
        console.log(cart)
    }

    return (
        <div className="row">
            {cart.products.length < 1 && 
            <button onClick={previous}>Précédent</button>
            }
            {products && products.map(prod => {
                if (prod.category === "Nos planches apéro accompagné d'une quille de qualité") {
                    return (
                        <Product
                            key={prod.id} prod={prod}
                            setFormulaStatus={setFormulaStatus}
                            setOrderContent={setOrderContent}
                            orderContent={orderContent}
                        />
                    )
                }
                return null
            })}
        </div>
    )
}

export default Main
