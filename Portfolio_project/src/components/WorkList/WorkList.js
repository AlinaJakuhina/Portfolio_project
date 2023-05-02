import React from 'react'
import s from './WorkList.module.css'
import { Link } from 'react-router-dom'

function WorkList(props) {

    const { id, title, main_img, year, tags, text} = props

  return (
    <div className={s.works_list}>
      <div className={s.work_image}>
      <img src={main_img} alt={title}/>
      </div>
        
      <div className={s.title_item}>
        <Link to={`/work/${id}`} className={s.link_title}>
          <h3 className={s.workList_title}>{title}</h3>
        </Link>

        <div className={s.date_items}>
          <p className={s.year}>{year}</p>
          <p className={s.tag}>{tags.join(', ')}</p>
        </div>
        <p className={s.text}>{text}</p>
      </div>
   
    </div>
  )
}

export default WorkList