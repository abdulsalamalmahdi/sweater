import React, { useEffect, useState, useRef } from "react";
import styles from './MenuButton.module.scss';

export default function Ham(props) {

    const btn = useRef(null);

   useEffect(()=>{

   },[props.toggle])

return (
    <div  onClick={()=>{props.handleClick()}} id={styles.menu} className={`${styles.menu_c} ${props.toggle? styles.open +" " + styles.radius:""} `}>
      <span></span>
    </div>
)

}