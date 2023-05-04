import React from 'react'
import s from './Home.module.css'
import { work_data} from '../../data/data'
import { blog_data } from '../../data/data'
import PostsContainer from '../../components/PostsContainer/PostsContainer'
import Header from '../../components/Header/Header'
import WorksContainer from '../../components/WorksContainer/WorksContainer'




function Home() {

  return (
    <div className={s.home}>
     <Header />
     <PostsContainer posts={2} />
     <p className={s.works_title}>Feautured works</p>
     <WorksContainer workNumber={3}/>
    </div>
  )
}


export default Home