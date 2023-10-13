const Title: React.FC<{ title: string; color?: string }> = (props) => {
  return (
    <h2
      className={`relative leading-5 font-black text-2xl md:text-3xl lg:text-5xl mb-4 max-w-2xl text-${props.color ?? 'header'}`}
    >
      {props.title}
    </h2>
  );
};

export default Title;
