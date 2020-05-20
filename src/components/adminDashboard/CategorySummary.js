import React, {useState} from 'react'

const CategorySummary = ({ cate, updateCategory, deleteCategory }) => {

    let [category, setCategory] = useState({
        name: cate.name,
        shortDescription: cate.shortDescription,
        longDescription: cate.longDescription,
        id: cate.id
    })

    let handleChange = e => setCategory({...category, [e.target.name]: e.target.value})

    let edit = () => updateCategory(category)

    let removeCategory = () => deleteCategory(category)

    return (
        <div className="collection-item " id='editAdminBlock'>
            <h5>Nom de la Catégorie: </h5>
            <input 
            type="text"
            name='name'
            defaultValue={cate.name}
            onChange={handleChange}
            />
            <br/>
            <h5>Description Courte:</h5>
            <input 
            type="text"
            name='shortDescription'
            defaultValue={cate.shortDescription}
            onChange={handleChange}
            />
            <br/>
            <h5>Description Longue:</h5>
            <input 
            type="text"
            name='longDescription'
            defaultValue={cate.longDescription}
            onChange={handleChange}
            />
            <br/>
            <button onClick={edit} className="btn black z-depth">Éditer</button>{'      '}
            <button onClick={removeCategory} className="btn black z-depth">Supprimer</button>
        </div>
    )
}

export default CategorySummary
