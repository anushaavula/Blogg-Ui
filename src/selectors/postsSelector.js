export const findPosts=(posts,id)=>{
    return posts.find(post=>post.id ===parseInt(id))
}
