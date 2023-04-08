import React from 'react'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Stack from '../components/Stack'
import PathToFollow from '../components/PathToFollow'
import styles from './HomePage.module.css';

const HomePage=()=>{
  return (
    <div className={styles.HomePage}>
       <header className={`semiBold ${styles.header}`}>
          <label className={styles.switch}>
            <input type='checkbox'/>
            <span className={styles.sliderRound}></span>
          </label>
          <div>
            <p>daniela.</p>
          </div>
       </header> 
       <main className={styles.main}>
        <Welcome/>
        <About/>
        <Stack/>
       </main>
       <footer></footer>
    </div>
  )
}

export default HomePage