import React from 'react'
import styles from './Welcome.module.css'
import me from '../assets/foto1.png'
export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.info}>
        <p className={`tittle`}>Hi</p>
        <p className={`tittle`}>there,</p>
        <p className={`tittle`}>I</p>
        <p className={`tittle`}> build</p>
        <p className={`tittle`}> web</p>
        <p className={`tittle`}> apps.</p>
      </div>
      <img className={styles.me} src={me} alt="me" />
    </div>
  )
}

export default Welcome