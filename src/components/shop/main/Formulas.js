import React from 'react'
import Product from './Formula'
import FadeIn from 'react-fade-in'


let Main = ({ products, setFormulaStatus, setOrderContent, orderContent, cart }) => {

    let previous = () => {
        setFormulaStatus({ selectFormula: false, selectZip: true })
        console.log(cart)
    }

    return (
        <FadeIn>
            <div className="headerShop">
                {cart.products.length < 1
                    ?
                    <div className='prevNext'>
                        <i className="material-icons left prevNext" onClick={previous}>arrow_back</i>
                    </div>
                    :
                    <div></div>
                }
                <div>
                    <h4 className='shoppingProcessTitle'>Nos Formules accompagnées d'un petit jus</h4>
                    <h5 className='shoppingProcessTitle'>Livraison comprise (Bientôt Rond)</h5>
                </div>
            </div>
            <div className="row">
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
        </FadeIn>
    )
}

export default Main
