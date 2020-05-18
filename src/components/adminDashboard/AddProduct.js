import React, { useState } from 'react'
import { storage } from '../../config/fbConfig';


let AddProduct = ({ createProduct, backToAdminStart }) => {

    let [product, setProduct] = useState({
        name: '',
        shortDescription: '',
        longDescription: '',
        price: '',
        image: ''
    })

    let [productImage, setProductImage] = useState(null)

    let [progress, setProgress] = useState(0)

    let handleChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value })
        console.log(product)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        createProduct(product)
        backToAdminStart()
    }

    let downloadImage = event => {
        console.log(event.target.files[0])
        setProductImage(event.target.files[0])
    }

    let fireImage = (e) => {
        e.preventDefault()
        let uploadTask = storage.ref(`images/${product.name}`).put(productImage);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                // error function ....
                alert(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(product.name).getDownloadURL().then(url => {
                    setProduct({ ...product, image: url })
                })
            });
    }



    return (
        <div className='container'>
            <button onClick={backToAdminStart}>Retour</button>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Ajouter un produit</h5>
                <div className="input-field">
                    <label htmlFor="title">Nom du produit</label>
                    <input type="text" id="name" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="shortDescription">Description courte</label>
                    <textarea id="shortDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="longDescription">Description longue</label>
                    <textarea id="longDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="price">Prix</label>
                    <input type="number" id="price" onChange={handleChange} />
                </div>

                <input type="file" onChange={downloadImage} />
                <button onClick={fireImage}>Upload</button>
                <progress value={progress} max="100" />

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth">Create</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct