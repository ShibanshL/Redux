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