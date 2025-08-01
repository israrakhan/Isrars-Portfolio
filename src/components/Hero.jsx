import React from 'react'
import HeroImage from '../assets/aboutme-image.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Israr Ahemad Khan</span>
            , FrontEnd-Web Developer & Cloud Engineer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
Creative frontend developer skilled in building responsive, user-centric web interfaces with modern frameworks and attention to seamless user experience.</p>
        <p className='mt-4 text-lg text-gray-300'>
cloud engineer with a strong foundation in Linux, AWS, and DevOps practices, adept at automating infrastructure and optimizing cloud deployments for reliability and scalability.</p>
      
        <div className='mt-8 space-x-4'>
           
           <a href="mailto:ik427094@gmail.com"target="_blank" >
           <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            </a> 
          
           <a href="https://drive.google.com/file/d/10AuF9PqQvKhbadzF5obhFuKFYCEbTKUF/view?usp=drive_link"target="_blank" >
           <button 
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </a> 

            <a href="https://www.credly.com/users/israr-ahemad-khan"target="_blank" >
           <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Earned Badges</button>
            </a> 
        </div>

    </div>
  )
}

export default Hero
