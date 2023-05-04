import React from 'react'
import s from './MobileMenu.module.css'
import { Link} from 'react-router-dom'

function MobileMenu({ active, setActive}) {
  return (

    <div className={active ? s.mobile_wrapper_active : s.mobile_wrapper}>
        <Link onClick={() => setActive(!active)} to='/'> Home </Link>
        <Link onClick={() => setActive(!active)} to='/Work'> Work </Link>
        <Link onClick={() => setActive(!active)} to='/Blog'> Blog </Link>
        <Link onClick={() => setActive(!active)} to='/Contact'> Contact </Link>

    </div>
  )
}

export default MobileMenu