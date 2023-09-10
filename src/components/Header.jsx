import styles from './Header.module.css'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem('theme-color') !== 'light')

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : ''
    localStorage.setItem('theme-color', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  function switchTheme() {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <button className={styles.themeBtn} onClick={switchTheme} aria-pressed={isDarkTheme} aria-label="Dark mode">
        <img src={isDarkTheme ? iconSun : iconMoon} alt="Dark mode" aria-hidden="true" />
      </button>
    </header>
  )
}
