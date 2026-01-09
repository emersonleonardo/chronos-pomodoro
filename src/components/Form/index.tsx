import { CirclePlay, CircleStop } from 'lucide-react'
import styles from './styles.module.css'
import Button from '../Button'

export default function Form() {
  return (
    <>
      <form action='' className={styles.form}>
        <div className={styles.input}>
          <label htmlFor='task'>Task</label>
          <input
            type='text'
            id='task'
            title='Dê um nome para o seu foco'
            placeholder='Qual será o seu foco?'
            required
          />
        </div>
        <Button type='submit'>
          <CirclePlay />
        </Button>
        <Button type='submit' color='error'>
          <CircleStop />
        </Button>
      </form>
      <div className={styles.textBreak}>
        <p>Você irá descansar por 5 minutos</p>
      </div>
    </>
  )
}
