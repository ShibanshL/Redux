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