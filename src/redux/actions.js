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

export const bugResolvedToTrue = id => {
    return (
        {
            type: actions.bugResolvedToTrue,
            payload: {
                id
            }
        }
    )
}

export const bugResolvedToFalse = id => {
    return (
        {
            type: actions.bugResolvedToFalse,
            payload: {
                id
            }
        }
    )
}
