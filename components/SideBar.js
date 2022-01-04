import styles from './SideBar.module.css';
import {useEffect, useRef, useState} from 'react';
import { useHam } from '../context/ham_data';
function SideBar() {
 
const {ham}= useHam()
    return (
 
  
     <div  className={` ${styles.side_bar} ${ham? 'visible':'invisible'}  transition  delay-150  duration-700`}>
      
      <div className={`${styles.content}`}>
    
     </div>
     
      </div>
    )
  }
  
  export default SideBar