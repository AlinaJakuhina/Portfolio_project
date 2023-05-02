import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'

function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to='/Home'> Home </Link>
        <Link to='/Work'> Work </Link>
        <Link to='/Blog'> Blog </Link>
        <Link to='/Contact'> Contact </Link>
    </div>
  )
}

export default NavMenu