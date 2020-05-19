import React, { useState, Fragment } from 'react'
import { storage } from '../../config/fbConfig';

let AddProduct = ({ createProduct, backToAdminStart, cateList }) => {

    let [product, setProduct] = useState({
        name: '',
        shortDescription: '',
        longDescription: '',
        price: '',
        image: '',
        category: ''
    })

    let [productImage, setProductImage] = useState(null)

    let [progress, setProgress] = useState(0)

    let handleChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value })
        console.log(product)
    }

    let downloadImage = event => {
        console.log(event.target.files[0])
        setProductImage(event.target.files[0])
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        if (product.price === '' || product.name === '') {
            alert('Remplir au moins le nom et le prix du produit')
        } else {
            createProduct(product)
            backToAdminStart()
        }
    }

    let fireImage = (e) => {
        e.preventDefault()
        let uploadTask = storage.ref(`images/${product.name}`).put(productImage);
        uploadTask.on('state_changed',
            (snapshot) => {
                let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                storage.ref('images').child(product.name).getDownloadURL().then(url => {
                    setProduct({ ...product, image: url })
                })
            });
    }

    return (
        <Fragment>
            <br /><br />
            <button className="btn black z-depth" onClick={backToAdminStart}>Retour</button>
            <br />
            <div className='container'>
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
                    {(cateList !== '') &&
                        <div className="input-field">
                            <select
                                id='category'
                                value={product.category}
                                className='browser-default'
                                onChange={handleChange}
                            >
                                <option value='' disabled>
                                    Selectionner une catégorie
                            </option>
                                {cateList.map(cate => {
                                    return <option key={cate.id} value={cate.name} >{cate.name}</option>
                                })}
                            </select>
                        </div>
                    }
                    <div className="input-field">
                        <label htmlFor="price">Prix</label>
                        <input type="number" id="price" onChange={handleChange} />
                    </div>
                    <div className="row">
                        <input type="file" onChange={downloadImage} />
                        <button className="btn black z-depth" onClick={fireImage}>Upload</button>{'    '}
                        <progress className="btn green z-depth" value={progress} max="100" />
                    </div>

                    <div className="input-field">
                        <button className="btn black z-depth">Create</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default AddProduct