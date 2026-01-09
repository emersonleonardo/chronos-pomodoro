import styles from './styles.module.css'

export default function Timer() {
  return (
    <div className={styles.timerContainer}>
      <p className={styles.timer}>00:00</p>
    </div>
  )
}
