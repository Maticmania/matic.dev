import React from 'react'
import Header from '../component/Header'
import '../css/home.css'
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import wave from '../assets/Images/waving.png'
import wizard from '../assets/Images/Dark-Wizard-1-icon.png'
import Matic from '../assets/Images/Matic-pa.jpg'

import iconhtml from '../assets/Images/icons-html-css.svg'
import iconjs from '../assets/Images/icons-js-git.svg'
import iconbt from '../assets/Images/icons-tail-bootstrap.svg'
import reactNext from '../assets/Images/icons-react-next.svg'
import nodeMongo from '../assets/Images/icons-node-mongo.svg'
import { GrInstagram } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";



const Home = () => {
  return (
    <div>
     <Header/>
        <section className='home-section' id='home'>
            <div className="home">
                <div className='content'>
                    <div className="top-content">
                        <div className='content-text'>
                            <h1>Coding Wizard With Superpowers!<img src={wave}/></h1>
                            
                            {/* <img src={wizard}/> */}
                            <p>Hi, I'm Olaitan Quadri. A passionate 
                                Full Stack Developer based in Lagos, Nigeria. 📍</p>
                            <div className='home-icon'>
                            <span><FaLinkedin/></span>
                            <span><FiGithub/></span>
                            </div>
                        </div>
                        <div className='hero-img'>
                            <img src={Matic} title='MATIC' />
                        </div>
                    </div>
                    <div className="bottom-content">
                        <p>Tech Stack</p>
                        <div className='stack-grid'>
                            <div className="stack">
                                <img src={iconhtml} alt="html-css" />
                            </div>
                            <div className="stack">
                            <img src={iconjs} alt="js-git" />
                            </div>
                            <div className="stack">
                            <img src={iconbt} alt="boot-tail" />
                            </div>
                            <div className="stack">
                            <img src={reactNext} alt="react-next" />
                            </div>
                            <div className="stack">
                            <img src={nodeMongo} alt="node-mongo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </section>
        <section className='about-section' id='about'> 
            <h1>Under construction 🏗️🚧👷🏾‍♂️</h1>  
             
                
        </section>
        <section className="bottom">
            <div className='project' id='project'>
                <div className="project-content">
                    Projects coming soon, Watch out! 🙈
                </div>
            </div>
            <div className='contacts' id='contact'>
                <div className="contact">
                    <div className='contact-content'>
                        <h3>CONTACT</h3>
                        <h2>Don't be shy! Hit me up! 👇🏾</h2>
                        <div className='content-title'>
                           <div className="insta">
                            <p><GrInstagram/></p>
                            <div>
                                <h3>Instagram</h3>
                                <a href='https://www.instagram.com/bigpicturematic/'>Bigpicturematic</a>
                            </div>
                            </div> 
                           <div className="email">
                                <p><MdOutlineEmail /></p>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:bigpicturematic">Bigpicturematic@gmail.com</a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright © 2024. All rights are reserved</p>
                        <h1>
                            <span><FaLinkedin/></span>
                            <span><FiGithub/></span>
                        </h1>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
