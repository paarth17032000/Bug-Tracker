import * as actions from './actionTypes'

export const bugAdded = desc => {
    return (
        {
            type: actions.bugAdded,
            payload: {
                desc
            }
        }
    )
}

export const bugRemoved = id => {
    return (
        {
            type: actions.bugRemoved,
            payload: {
                id
            }
        }
    )
}

export const bugResolved = id => {
    return (
        {
            type: actions.bugResolved,
            payload: {
                id
            }
        }
    )
}
