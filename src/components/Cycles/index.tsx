import styles from './styles.module.css'

export default function Cycles() {
  return (
    <div className={styles.cycleContainer}>
      <p>Ciclos:</p>
      <ul className={styles.cyclesDots}>
        <li className={styles.workTime}></li>
        <li className={styles.shortBreakTime}></li>
        <li className={styles.longBreakTime}></li>
      </ul>
    </div>
  )
}
