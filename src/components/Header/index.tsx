import { useEffect, useState } from 'react'
import styles from './styles.module.css'

import {
  HourglassIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react'

type AvailableThemes = 'dark' | 'light'

export function Header() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const localStorageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark'

    return localStorageTheme
  })

  const themeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <HourglassIcon size={58} />
      </div>
      <h1 className={styles.title}>Pomodoro</h1>
      <nav className={styles.listMenu}>
        <li>
          <a
            href='#'
            aria-label='Ir para a página inicial'
            title='Página inicial'
          >
            <HouseIcon />
          </a>
        </li>
        <li>
          <a href='#' aria-label='Ir para o histórico' title='Histórico'>
            <TimerIcon />
          </a>
        </li>
        <li>
          <a
            href='#'
            aria-label='Ir para as configurações'
            title='Configurações'
          >
            <SettingsIcon />
          </a>
        </li>
        <li>
          <button
            aria-label='Alterar o tema da página'
            title='Alterar o tema da página'
            onClick={handleThemeChange}
          >
            {themeIcon[theme]}
          </button>
        </li>
      </nav>
    </div>
  )
}
