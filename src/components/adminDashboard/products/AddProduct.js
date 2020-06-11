import React, { useState, Fragment } from 'react'
import { storage } from '../../../config/fbConfig';

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
        let uploadTask = storage.ref(`images/${productImage.name}`).put(productImage);
        uploadTask.on('state_changed',
            (snapshot) => {
                let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                storage.ref('images').child(productImage.name).getDownloadURL().then(url => {
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
                    {/* NOM DU PRODUIT  */}
                    <div className="input-field">
                        <label htmlFor="title">Nom du produit</label>
                        <input type="text" id="name" onChange={handleChange} />
                    </div>
                    {/* DESCRIPTION COURTE */}
                    <div className="input-field">
                        <label htmlFor="shortDescription">Description courte</label>
                        <textarea id="shortDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                    </div>
                    {/* DESCRIPTION LONGUE */}
                    <div className="input-field">
                        <label htmlFor="longDescription">Description longue</label>
                        <textarea id="longDescription" className="materialize-textarea" onChange={handleChange}></textarea>
                    </div>
                    {/* DETAILS */}
                    {/* DETAIL 1 */}
                    <div className="row">
                        <div className="input-field col s4">
                            <label htmlFor="title">Quantité</label>
                            <input type="text" id='detail1Quantity' onChange={handleChange} />
                        </div>
                        <div className="input-field col s4">
                            <label htmlFor="title">Détails</label>
                            <input type="text" id='detail1Name' onChange={handleChange} />
                        </div>
                    </div>
                    {/* DETAIL 2 */}
                    {product.detail1Quantity &&
                        <div className="row">
                            <div className="input-field col s4">
                                <label htmlFor="title">Quantité</label>
                                <input type="text" id='detail2Quantity' onChange={handleChange} />
                            </div>
                            <div className="input-field col s4">
                                <label htmlFor="title">Détails</label>
                                <input type="text" id='detail2Name' onChange={handleChange} />
                            </div>
                        </div>
                    }
                    {/* DETAIL 3  */}
                    {product.detail2Quantity != null &&
                        <div className="row">
                            <div className="input-field col s4">
                                <label htmlFor="title">Quantité</label>
                                <input type="text" id='detail3Quantity' onChange={handleChange} />
                            </div>
                            <div className="input-field col s4">
                                <label htmlFor="title">Détails</label>
                                <input type="text" id='detail3Name' onChange={handleChange} />
                            </div>
                        </div>
                    }
                    {/* DETAIL 4 */}
                    {product.detail3Quantity != null &&
                        <div className="row">
                            <div className="input-field col s4">
                                <label htmlFor="title">Quantité</label>
                                <input type="text" id='detail4Quantity' onChange={handleChange} />
                            </div>
                            <div className="input-field col s4">
                                <label htmlFor="title">Détails</label>
                                <input type="text" id='detail4Name' onChange={handleChange} />
                            </div>
                        </div>
                    }
                    {/* DETAIL 5 */}
                    {product.detail4Quantity != null &&
                        <div className="row">
                            <div className="input-field col s4">
                                <label htmlFor="title">Quantité</label>
                                <input type="text" id='detail5Quantity' onChange={handleChange} />
                            </div>
                            <div className="input-field col s4">
                                <label htmlFor="title">Détails</label>
                                <input type="text" id='detail5Name' onChange={handleChange} />
                            </div>
                        </div>
                    }
                    {/* CATEGORY */}
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
                    {/* PRICE */}
                    <div className="input-field">
                        <label htmlFor="price">Prix</label>
                        <input type="number" id="price" onChange={handleChange} />
                    </div>
                    {/* IMAGE */}
                    <div className="row">
                        <input type="file" onChange={downloadImage} />
                        <button className="btn black z-depth" onClick={fireImage}>Upload</button>{'    '}
                        <progress className="btn green z-depth" value={progress} max="100" />
                    </div>
                    {/* ADD PRODUCT  */}
                    <div className="input-field">
                        <button className="btn black z-depth">Create</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default AddProduct