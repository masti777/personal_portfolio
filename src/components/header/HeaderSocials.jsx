import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/masti444" ><BsLinkedin/></a>
        <a href="https://github.com/masti777" ><FaGithub/></a>
        <a href="https://t.me/masti_777" ><FaTelegram/></a>

    </div>
  )
}

export default HeaderSocials
