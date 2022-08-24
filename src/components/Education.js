import React from 'react'
import "../styles/education.css"
export default function Education() {
  return (
    <div className='edu-maindiv'>
      <h2 style={{color:'#55198b',fontSize:'3.25vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center'}}>My Education</h2>
      <div className='edu-divs'>
        <div className='edu-image-wrapper'>
        <img src={require("../images/Masailogo.jpg")} 
        alt=""/>
        </div>
        <div className='edu-info'>
        <div><h2 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center', margin:'0'}}>Masai School</h2> <p>October 2021-Present</p></div>
         <h3>Full Stack Web Development Course (MERN)</h3> 
        </div>
      </div>
      <div className='edu-divs'>
        <div className='edu-image-wrapper'>
        <img src={require("../images/bujhansiuni.jpg")} 
        alt=""/>
        </div>
        <div className='edu-info'>
        <div><h2 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center', margin:'0'}}>Bundelkhand University, Jhansi</h2> <p>2018-2022</p></div>
         <h3>Bachelor of Technology, (Mechanical Engineering)</h3> 
        </div>
      </div>
      <div className='edu-divs'>
        <div className='edu-image-wrapper'>
        <img src={require("../images/rrds.jpg")} 
        alt=""
        />
        </div>
        <div className='edu-info'>
        <div><h2 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center', margin:'0'}}>R R D S Inter College, Bangarmau, Unnao</h2> <p>2016-2017</p></div>
         <h3>XII (Physics, Chemistry, Mathematics)</h3> 
        </div>
      </div>
    </div>
  )
}
