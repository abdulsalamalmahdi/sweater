import React, { useEffect, useState, useRef, useContext } from "react";
import styles from './MenuButton.module.scss';
import {useHam} from '../context/ham_data';

export default function Ham(props) {


   const {ham, setHam}= useHam()
  
  const tic=()=>{
   setHam(!ham)
   console.log(ham)
  }
   
   useEffect(()=>{

   },[])

return (
    <div  onClick={()=>{tic()}} id={styles.menu} className={`${styles.menu_c} ${ham? styles.open +" " + styles.radius:""} `}>
      <span></span>
    </div>
)

}