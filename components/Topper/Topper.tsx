import styles from './Topper.module.css'

const Topper: React.FC<{ color?: string; text: string }> = (props) => {
    return (
        <span className={`mb-1 block font-bold uppercase text-${props.color ?? 'primary'} ${styles.csTopper}`}>{props.text}</span>
    )
}

export default Topper;