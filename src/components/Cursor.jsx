import React from 'react'
import styles from './Cursor.module.css'
const Cursor = (props) => {

  return (
    <div className={styles.cursor}>
        {props.children}
    </div>
  )
}

export default Cursor