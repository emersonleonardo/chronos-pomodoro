import styles from './Header.module.css'

import {
  HourglassIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <HourglassIcon size={58} />
      </div>
      <h1 className={styles.title}>Pomodoro</h1>
      <nav className={styles.listMenu}>
        <li>
          <button>
            <TimerIcon />
          </button>
        </li>
        <li>
          <button>
            <HouseIcon />
          </button>
        </li>
        <li>
          <button>
            <SettingsIcon />
          </button>
        </li>
        <li>
          <button>
            <SunIcon />
          </button>
        </li>
      </nav>
    </div>
  )
}
