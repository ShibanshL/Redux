// The journey begins //
// Actions //

const buy_cake = 'Buy Cake'

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