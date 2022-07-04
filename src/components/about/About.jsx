import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'> 
    <h5>Get To know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
        <img src={ME} alt="About Image "/>
        </div></div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
           <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year online working</small>
          </article>

          <article className='about__card'>
           <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 6+ Completed </small>
          </article>
        </div>
<p>
I'm full stack web developer and computer Engineer.I'm interested in computer software related works.
I'm commited to learning any new skills.

</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div></div> </section>
  )
}

export default About