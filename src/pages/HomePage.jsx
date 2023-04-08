import React from 'react'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Stack from '../components/Stack'
import PathToFollow from '../components/PathToFollow'
import styles from './HomePage.module.css';
import {useThemeContext} from '../providers/GeneralProvider'

const HomePage=()=>{

  const theme = useThemeContext();
  return (
    <div className={`${styles.HomePage} ${theme.theme?styles.ligth:styles.dark}`}>
       <header className={`semiBold ${styles.header}`}>
          <label className={styles.switch}>
            <input type='checkbox' value={theme} onChange={theme.handleTheme}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
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