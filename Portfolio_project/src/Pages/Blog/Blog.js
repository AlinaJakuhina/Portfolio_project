import React from 'react'
import s from './Blog.module.css'
import { blog_data } from '../../data/data'
import Post from '../../components/Post/Post'

function Blog() {
  
  
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Blog</h1>

      <div className={s.blog_wrapper}>
        {blog_data.map((elem, index) => <Post key={index} {...elem}/>)}
        
      </div>


    </div>
  )
}

export default Blog