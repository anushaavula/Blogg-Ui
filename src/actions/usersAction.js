import axios from 'axios'

//set to store
export const setUsers=(users)=>{
    return{type:'SET_USERS', payload:users}
}
//get from api
export const startGetUsers=()=>{
    return function(dispatch){
        axios.get('http://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                 const users=response.data
                // console.log('start get users',users)
                dispatch(setUsers(users))
             })    
    }
}

