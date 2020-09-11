import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import UsersList from './components/UsersList'
import UserShow from './components/UserShow'
import PostsList from './components/PostsList'
import PostShow from './components/PostShow'


function App(props) {
  return (
    <Router>
   <div>
    
   <Link to="/users">UsersList</Link>
   <Link to="/posts">PostsList</Link>
   
   
   
   
   
   <Route path="/users" component={UsersList} exact={true}/>
   <Route path="/users/:id" component={UserShow}/>
   <Route path="/posts" component={PostsList} exact={true}/>
   <Route path="/posts/:id" component={PostShow}/>
   
   
   

   </div>
   </Router>
   
  );
}


 export default App
