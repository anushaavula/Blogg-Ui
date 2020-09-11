import React from 'react'
import {connect} from 'react-redux'
import { findPosts } from '../selectors/postsSelector';
import {findUser} from '../selectors/usersSelector'

class PostShow extends React.Component{

    render(){
        return(
            <div>
                {this.props.post&&(
                    <div>
                    <h1>UserShow</h1>
                    <p>post Title-{this.props.post.title}</p>
                    <p>post Username-{this.props.user.username}</p>
                    <p>post Body-{this.props.post.body}</p>
                    </div>
                )}
               
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const post=findPosts(state.posts,props.match.params.id)
    if(post){
    return{
        post,
       // user:state.users.find(user=>user.id ==props.match.params.id)
        user:findUser(state.users,post.userId)
    }
}
}
export default connect(mapStateToProps)(PostShow)
