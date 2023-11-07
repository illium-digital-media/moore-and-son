import Link from "next/link";
import styles from './Button.module.css';

const Button: React.FC<{ link: string; text: string; bgColor?: string; textColor?: string}> = (props) => {
    return (
        <button className={`relative bg-${props.bgColor ?? 'primary'} text-${props.textColor ?? 'white'} ${styles.buttonSolid} hover:text-white`}>
            <Link href={props.link} className="h-full w-full">{props.text}</Link>
        </button>
    )
}

export default Button;