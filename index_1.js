// The multiple reducers //
// Actions //

const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const comebineReducers =  redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


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

const initialCakeState = {
    numOfCakes:20,
}

const initialIceCreamState = {
    numOfIceCream:20,
}

const reducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case buy_icecream : return{
            ... state,
            numOfIceCream: state.numOfIceCream - 2,
        }
        default: return state
    }
}

const reducer2 = (state=initialCakeState, action) => {
    switch(action.type){
        case buy_cake : return{
            ... state,
            numOfCakes: state.numOfCakes - 1,
        }
        default: return state
    }
}


//You are combining the reducers here

const rootReducer = comebineReducers({
    cake : reducer2,
    icecream : reducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state ',store.getState())
const unsubscribe = store.subscribe(() =>{})


store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())

// unsubscribe()

store.dispatch(actionCreator2())
store.dispatch(actionCreator2())
store.dispatch(actionCreator2())


unsubscribe()