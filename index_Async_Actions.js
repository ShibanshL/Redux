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