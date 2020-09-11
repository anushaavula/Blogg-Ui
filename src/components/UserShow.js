import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { findUser } from '../selectors/usersSelector';
import {filterPostUser} from '../selectors/filterSelector'

class UserShow extends React.Component{

    render(){
        return(
            <div>
                {this.props.user&&(
                    <div>
                    <h1>UserShow-{this.props.user.username}</h1>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.email}</p>
                    <h2>posts by the {this.props.user.username}</h2>
                    <ul>
                   {this.props.posts.map(post=>{
                        return<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
                    </div>
                )}

              
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const user=findUser(state.users,props.match.params.id)
    return{
        user,
        posts:filterPostUser(state.posts,user.id)
        
    }
}
export default connect(mapStateToProps)(UserShow)