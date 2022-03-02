const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading:true,
    data:[],
    error:''
}

const fetch_user_request = 'fetch_user_request'
const fetch_user_success = 'fetch_user_success'
const fetch_user_failure = 'fetch_user_failure'


const fetchUserRequest = () =>{
    return{
        type:fetch_user_request
    }
}

const fetchUserSuccess = user =>{
    return{
        type:fetch_user_success,
        payload:user
    }
}

const fetchUserError = error =>{
    return{
        type:fetch_user_failure,
        payload:error
    }
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case fetch_user_request:
            return{
                ...state,
                loading:true
            }

        case fetch_user_success:
            return{
                loading:false,
                user:action.payload,
                error:''
            }

        case fetch_user_failure:
            return{
                loading:false,
                user:[],
                error:action.payload

            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const user = res.data.map(e => e.id)
            dispatch(fetchUserSuccess(user))
        })
        .catch(err => {
            // const error = err.data
            dispatch(fetchUserError(err.message))
        })
    }
}

// const fetchUsers = () => {
//     return async function(dispatch){
//          try{
//             dispatch(fetchUserRequest())
//             const url ='https://jsonplaceholder.typicode.com/users'
//             const response = await fetch(url)
//             const data = await response.json()
            
//             const user = data.map(e => e.id)
//             dispatch(fetchUserSuccess(user))
//         }
//         catch (e) {
//             dispatch(fetchUserError(e.message))
//         }
// }
// }


const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState())})
store.dispatch(fetchUsers())
// console.log('Initial state ',store.getState())
