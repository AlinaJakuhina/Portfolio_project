import React from 'react'
import s from './Footer.module.css'
import fb from '../Footer/Media/fb.png'
import insta from '../Footer/Media/insta.png'
import Linkedin from '../Footer/Media/Linkedin.png'
import twitter from '../Footer/Media/Twitter.png'

function Footer() {
  return (
    <div className={s.footer_wrapper}>
        <div className={s.social_items}>
            <img src={fb} alt='Facebook'/>
            <img src={insta} alt='Instagrem'/>
            <img src={twitter} alt='Twitter'/>
            <img src={Linkedin} alt='Linkedin'/>
            
        </div>

        <p className={s.footer_text}>Copyright ©2020 All rights reserved</p>
    </div>
  )
}

export default Footer