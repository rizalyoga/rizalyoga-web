import React from 'react'
import styles from './Card.module.scss'
import data from "../../data/portofolio.json"

const Card = () => {
  interface Data {
      cover: string;
      title: string;
      description: string;
      demoUrl: string;
      githubUrl: string;
  }

  const datas: Data[] = data.portfolio;
  const github: string = "/assets/portofolio-cover/github.png";
  
  return (
    <>
      {
        datas.map((porto, i)=> (
          <div className={styles.container} key={i} >
            <div className={styles['images-container']}>
              <img src={porto.cover ? porto.cover : github} alt="cover" />
            </div>
            <div className={styles["desc-container"]}>
                <h3>{porto.title}</h3>
                <div className={styles['control-btn']}>
                  <a href={porto.demoUrl} target='_blank'>Demo</a>
                  <a href={porto.githubUrl} target='_blank'>Github</a>
                </div>
            </div>
          </div>
        ))
      }   
    </>
  )
}

export default Card