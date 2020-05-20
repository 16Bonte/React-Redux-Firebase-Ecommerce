import React, { useState, Fragment } from 'react'

const AddCategory = ({ createCategory, backToAdminStart }) => {

    let [category, setCategory] = useState({
        name: '',
        shortDescription: '',
        longDescription: ''
    })

    let handleChange = e => setCategory({ ...category, [e.target.id]: e.target.value })

    let handleSubmit = (e) => {
        e.preventDefault()
        if (category.name === '') {
            alert('Ajouter au moins un nom')
        } else {
            createCategory(category)
            backToAdminStart()
        }
    }

    return (
        <Fragment>
        <br/><br/>
        <button className="btn black z-depth" onClick={backToAdminStart}>Retour</button>
        <br/>
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Ajouter une catégorie</h5>
                <div className="input-field">
                    <label htmlFor="title">Nom de la catégorie</label>
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
                    <button className="btn black z-depth">Create</button>
                </div>
            </form>
        </div>
        </Fragment>
    )
}

export default AddCategory