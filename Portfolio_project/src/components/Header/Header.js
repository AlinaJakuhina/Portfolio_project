import React from 'react'
import s from './Header.module.css'
import man from '../Header/Media/man.png'

function Header() {
  return (
    <div>
      <div className={s.container}>

        <div className={s.header_wrapper}>
            <h3 className={s.title}>Hi, I am John, <br/>Creative Technologist</h3>
            <p className={s.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className={s.button}>Download Resume</button>
        </div>
        
        <div className={s.avatar}>
            <img src={man} alt='avatar'/>
        </div>
      </div>
        
    </div>
  )
}

export default Header