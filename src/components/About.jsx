import React from 'react'
import styles from './About.module.css'
import Cursor from './Cursor'
export const About = () => {
  return (
    <div className={styles.about}>
      <h2 className='semiBold'>About me</h2>
      <Cursor>
        <p className={styles.info}>
          " Web Developer learning every day, My stack so far: ReactJS,     JavaScript Vanilla, CSS, HTML y C#, Java.
          Currently working on Diebold Nixdorf since September /22 after work 3 years for a Mexican company that develop Medical equipments interested to learn React Native, increase my backend skills and Swift for IOS applications, I am motivated, capable and not afraid to learn new things. "
        </p>
      </Cursor>
    </div>
  )
}

export default About