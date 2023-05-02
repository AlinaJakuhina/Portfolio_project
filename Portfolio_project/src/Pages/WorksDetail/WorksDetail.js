import React from 'react'
import s from './WorksDetail.module.css'
import { useParams } from 'react-router-dom'
import { work_data } from '../../data/data'


function WorksDetail() {
 
let {id} = useParams()
  console.log(id)

  const { title, year, tags, text, content } = work_data[id]

  return(
    <div>
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
      </div>

      <div className={s.wrapper}>
        <p className={s.year}>{year}</p>
        <p className={s.tag}>{tags.join(', ')}</p>
      </div>

      <p className={s.text}>{text}</p>

      <div className={s.content_wrapper}>
        {
           content.map((item, index) => {
            if (item[0] === 'h1') {
              return <h1 className={s.content_title} key={index}>{item[1]}</h1>
            } else if (item[0] === 'img') {
              return <img className={s.content_img} key={index} src={item[1]} alt={item[0]}/>
            } else if (item[0] === 'h2') {
              return <h2 className={s.content_h2} key={index}>{item[1]}</h2>
            } else if (item[0] === 'text') {
              return <p className={s.content_text} key={index}>{item[1]}</p>
            }
          } )
        }
      </div>
    </div>
  )
}

export default WorksDetail