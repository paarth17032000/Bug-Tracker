import * as actions from './actionTypes'

// state = []

// reducer
let id = 0

function reducer(state = [], action){
    switch(action.type){
        case actions.bugAdded: 
            return[
                ...state,
                {
                    id: ++id,
                    desc: action.payload.desc,
                    resolved: false
                }
            ]

        case actions.bugRemoved:
            return state.filter( bug => action.payload.id !== bug.id)

        case actions.bugResolved:
            return state.map( bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true}
            );

        default:
            return state;

    }
}

export default reducer