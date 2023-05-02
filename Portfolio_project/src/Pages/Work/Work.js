import React from 'react'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import s from './Work.module.css'
import { work_data } from '../../data/data'



function Work() {
 
  return(

    <div>
      <h2 className={s.title}>Work</h2>
      <div className={s.wrapper}>
        <WorksContainer works={work_data} />
      </div>
    </div>
    
  )
}

export default Work