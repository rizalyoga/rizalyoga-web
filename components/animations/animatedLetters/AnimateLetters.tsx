import React from 'react'
import styles from "./AnimateLetters.module.scss"

const AnimateLetters = ({letterClass,strArray, idx}:any) => {
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