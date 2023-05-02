import React from 'react'
import s from './Post.module.css'

function Post(props) {

const { title, date, tags, text } = props

const newDate = new Date(date)
const postDate = newDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

const styleTag = {
  color: '#21243D',
  fontSize: '20px',
}
const styleLine = {
  borderBottom: '1px solid #E0E0E0',
  padding: '30px 0'
}

  return (
    <div className={s.wrapper} >
        <h2 className={s.title}>{title}</h2>
        <div className={s.info_wrapper}>
            <h4 className={s.items_title}>{postDate}</h4>
            <span className={s.span_item}> | </span>
            <h4 className={s.item_tag} style={styleTag}>{tags}</h4>
        </div>

        <p className={s.description} style={styleLine}>{text}</p>
        
    </div>
  )
}

export default Post