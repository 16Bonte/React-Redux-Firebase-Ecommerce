import React, {useState} from 'react'

const ProductSummary = ({ prod, updateProduct, deleteProduct }) => {

    let [product, setProduct] = useState({
        name: prod.name,
        shortDescription: prod.shortDescription,
        longDescription: prod.longDescription,
        price: prod.price,
        image: prod.image,
        category: prod.category,
        id: prod.id
    })

    let handleChange = e => setProduct({...product, [e.target.name]: e.target.value})

    let edit = () => updateProduct(product)

    let removeProduct = () => deleteProduct(product)

    return (
        <div className="collection-item " id='editAdminBlock'>
            <h5>Nom du produit: </h5>
            <input 
            type="text"
            name='name'
            defaultValue={prod.name}
            onChange={handleChange}
            />
            <br/>
            <h5>Description Courte:</h5>
            <input 
            type="text"
            name='shortDescription'
            defaultValue={prod.shortDescription}
            onChange={handleChange}
            />
            <br/>
            <h5>Description Longue:</h5>
            <input 
            type="text"
            name='longDescription'
            defaultValue={prod.longDescription}
            onChange={handleChange}
            />
            <br/>
            <h5>Prix:</h5>
            <input 
            type="number"
            name='price'
            defaultValue={prod.price}
            onChange={handleChange}
            />
            <br/>
            {prod.image && <img src={prod.image} alt="productImage"/>}
            <br/>
            <button onClick={edit} className="btn black z-depth">Éditer</button>{'      '}
            <button onClick={removeProduct} className="btn black z-depth">Supprimer</button>
        </div>
    )
}

export default ProductSummary