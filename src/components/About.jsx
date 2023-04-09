import React from 'react'
import styles from './About.module.css'
import { useRefContext } from '../providers/RefProvider'

export const About = () => {
  const refs = useRefContext();
  return (
    <div className={styles.about} ref={refs.about}>
      <h2 className='semiBold'>About me</h2>
      <p className={styles.info}>
        " Software Developer learning every day, Hi, my name is Daniela and I am from Colombia but currently I am living in Mexico, I love nature and travel, I studied Mechatronics Engineering here: <a href='https://www.unipiloto.edu.co/' target='_blank'>UPC</a> between 2013 and 2018, currently working in Diebold Nixdorf as a Software engineer since September /22 after working 3 years for a Mexican company that develops Medical equipments as a Software Developer. I am interested in increasing my skills everyday to become a Senior full stack developer and continue learning more about Gradle Java projects, React Native, Swift for IOS applications and so on. I am motivated, capable and not afraid to learn new things so let's start working together! "
      </p>
    </div>
  )
}

export default About