import "./SchemeColor.css";
import React from 'react';

export const SchemeColor = ({color}) =>{
  const styles = {
    backgroundColor: color
  }
  return (
    <div className='scheme-color' style={styles}>{color}</div>
  )
}


