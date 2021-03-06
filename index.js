// The journey begins //
// Actions //

const redux = require('redux')
const createStore = redux.createStore

const buy_cake = 'BUY_CAKE'


const buy_icecream = 'BUY_ICECREAM'

function actionCreator(){
    return {
        type:buy_cake,
        info:'First redux action'
    }
}

function actionCreator2(){
    return {
        type:buy_icecream,
        info:'Second redux action'
    }
}

//(prevState, action) = newState

const initialState = {
    numOfCakes:20,

    numOfIceCream:20
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case buy_cake : return{
            ... state,
            numOfCakes: state.numOfCakes - 1,
        }
        case buy_icecream : return{
            ...state,
            numOfIceCream : state.numOfIceCream + 1
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

// unsubscribe()

store.dispatch(actionCreator2())
store.dispatch(actionCreator2())
store.dispatch(actionCreator2())


unsubscribe()