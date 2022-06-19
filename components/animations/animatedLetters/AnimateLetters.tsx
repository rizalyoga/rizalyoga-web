import React from 'react'
import styles from "./AnimateLetters.module.scss"

interface ClidrenProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimateLetters = ({letterClass,strArray, idx}:ClidrenProps) => {
  return (
    <span>
        {
            strArray.map((char:any, i:any) =>(
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimateLetters