import {createStore} from 'redux'
import reducer from './redux/reducer'
import * as functions from './redux/actions'


const store = createStore(reducer);

console.log(store);

store.subscribe( () => {
    console.log(store.getState())
    console.log('state changed')
})


store.dispatch(functions.bugAdded('bug 1'))
store.dispatch(functions.bugAdded('bug 2'))
store.dispatch(functions.bugAdded('bug 3'))
// store.dispatch(functions.bugRemoved(2))

// store.dispatch(functions.bugRemoved(3))

// store.dispatch(functions.bugResolved(1))




export default store;