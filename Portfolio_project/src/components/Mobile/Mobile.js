import React from 'react'
import s from './Mobile.module.css'

function Mobile({ active, setActive}) {
  return (
    <div>
        <div onClick={() => setActive(!active)} className={active ? s.burger_active : s.burger}>
           <span className={s.line}></span>
           <span className={s.line}></span>
           <span className={s.line}></span>
        </div>
    </div>
  )
}

export default Mobile