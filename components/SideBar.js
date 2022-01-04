import styles from './SideBar.module.css';
import {useEffect, useRef, useState} from 'react';
function SideBar(props) {
 const _side_bar = useRef(null)
  useEffect(()=>{
      const _vh = window.innerHeight * 0.01;
      console.log(_vh, window.innerHeight)
      _vh ? _side_bar.current.style.setProperty('--hv', `${_vh}px`):'100vh'
  },[])

    return (
 
  
     <div ref={_side_bar} className={` ${styles.side_bar}   transition  delay-150  duration-700`}>
      
      <div className={`${styles.content}`}>
    
     </div>
     
      </div>
    )
  }
  
  export default SideBar