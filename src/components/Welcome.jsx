import React from 'react'
import styles from './Welcome.module.css'
import me from '../assets/foto.png'
export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.info}>
        <p className={`tittle`}>Hi</p>
        <p className={`tittle`}>there,</p>
        <p className={`tittle`}>I</p>
        <p className={`tittle`}> just</p>
        <p className={`tittle`}> love</p>
        <p className={`tittle`}> to</p>
        <p className={`tittle`}> code.</p>
      </div>
      <img className={styles.me} src={me} alt="me" />
    </div>
  )
}

export default Welcome