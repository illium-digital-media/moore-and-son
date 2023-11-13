const Topper: React.FC<{ color?: string; text: string, classes?: string}> = (props) => {
    return (
        <span className={`mb-1 block font-bold uppercase leading-[1.2em] text-topper tracking-widest text-${props.color ?? 'primary'} ${props.classes}`}>{props.text}</span>
    )
}

export default Topper;