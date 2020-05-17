import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


let CreateProject = ({ createProject, history, auth }) => {

    let [project, setProject] = useState({
        title: '',
        content: ''
    })

    let handleChange = (e) => setProject({ ...project, [e.target.id]: e.target.value })
    

    let handleSubmit = (e) => {
        e.preventDefault()
        createProject(project)
        history.push('/')
    }

    if (!auth.uid) return <Redirect to='/signin' />


    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth">Create</button>
                </div>
            </form>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
