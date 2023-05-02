import React from 'react'
import WorkList from '../WorkList/WorkList'
import s from './WorksContainer.module.css'
import { work_data } from '../../data/data'

function WorksContainer({ workNumber }) {

    const works = work_data;

  return (
    <div>
      <div className={s.works_items}>
            {works.slice(0, !workNumber ? works.length : workNumber)
                   .map((elem, index) => <WorkList className={s.works}
                                                 {...elem} key={index}/>)}
        </div>  
    </div>
  )
}

export default WorksContainer