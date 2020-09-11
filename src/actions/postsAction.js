import axios from 'axios'

//set to store
export const setPosts=(posts)=>{
    return{type:'SET_POSTS', payload:posts}
}
//get from api
export const startGetPosts=()=>{
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((response)=>{
                 const posts=response.data
                // console.log('start get users',users)
                dispatch(setPosts(posts))
             })    
    }
}