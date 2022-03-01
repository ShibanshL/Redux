// The journey begins //
// Actions //

const redux = require('redux')
const createStore = redux.createStore

const buy_cake = 'BUY_CAKE'

function actionCreator(){
    return {
        type:buy_cake,
        info:'First redux action'
    }
}

//(prevState, action) = newState

const initialState = {
    numOfCakes:20
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case buy_cake : return{
            ... state,
            numOfCakes: state.numOfCakes-1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state ',store.getState())
const unsubscribe = store.subscribe(() =>console.log('Updated State ',store.getState()))
store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())


unsubscribe()