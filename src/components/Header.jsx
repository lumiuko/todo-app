import styles from './Header.module.css'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <button className={styles.themeBtn} onClick={props.switchTheme} aria-pressed={props.isDarkTheme} aria-label="Dark mode">
        <img src={props.isDarkTheme ? iconSun : iconMoon} alt="Dark mode" aria-hidden="true" />
      </button>
    </header>
  )
}
