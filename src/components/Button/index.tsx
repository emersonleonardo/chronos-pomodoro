import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
  color?: 'default' | 'error'
} & React.ComponentProps<'button'>

export default function Button({
  children,
  color = 'default',
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {children}
    </button>
  )
}
