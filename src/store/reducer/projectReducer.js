let initState = {
    projects: [
        {id: '1', title: 'Project Name', content: 'blah blah blaj'},
        {id: '2', title: 'Project Name', content: 'blah blah blaj'},
        {id: '3', title: 'Project Name', content: 'blah blah blaj'},
        {id: '4', title: 'Project Name', content: 'blah blah blaj'}
    ]
}

let projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error:', action.err)
            return state
        default: 
            return state
    }
}

export default projectReducer