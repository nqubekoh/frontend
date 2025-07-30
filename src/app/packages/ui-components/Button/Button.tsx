import styles from './Button.module.sass'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };

export const Button = ({ children, ...props }: Props) => {
  return <button className={styles.button} {...props}>{children}</button>;
}
