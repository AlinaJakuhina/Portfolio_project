import React from 'react'
import s from './PostsContainer.module.css'
import Post from '../Post/Post'
import { NavLink } from 'react-router-dom'
import { blog_data } from '../../data/data'


function PostsContainer({ posts }) {

  const styleTitle = {
    padding: '20px 0',
    fontSize: '22px',
    fontWeight: '400',
    color: '#21243D',
  }

  const stylePosts = {
    margin: '30px ',
    padding: '32px 0',
  }

  return (
     <div className={s.container}>
      <div className={s.post_background}>
        <div className={s.post_wrapper}>
            <p className={s.title} style={styleTitle}>Recent posts</p>
            <NavLink to='/Blog' className={s.post_link}>
                <p className={s.link}>View All</p>
            </NavLink>
        </div>

        <div className={s.posts_items} style={stylePosts}>
            {blog_data.slice(0, !posts ? posts.length : posts)
                      .map((elem, index) => <Post className={s.posts} 
                                                 {...elem} key={index}/>)}
        </div>  
     </div>
   </div>
  )
}

export default PostsContainer