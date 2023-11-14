import Link from "next/link";

const Button: React.FC<{ link: string; text: string; bgColor?: string; textColor?: string; classes?: string }> = (props) => {
    return (
        <Link href={props.link} className={`p-3 relative font-bold text-center border-box relative inline-block z-10 min-w-[9rem] lg:leading-12 before:content-[''] before:absolute before:h-full before:w-0 before:top-0 before:left-0 before:bg-primaryLight before:opacity-100 before:-z-10 hover:before:w-full before:transition-width before:duration-300 bg-${props.bgColor ?? 'primary'} text-${props.textColor ?? 'white'} hover:text-black ${props.classes ?? ''}`}>
            {props.text}
        </Link>

    )
}

export default Button;