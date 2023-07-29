const CommonLanding: React.FC<{ heading: string }> = (props) => {
  return (
    <section
      className="bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url("https://altechpainting.com/wp-content/uploads/2017/03/header.png")`,
      }}
    >
      <div className="max-w-screen-lg max-lg:max-w-screen-sm flex items-center justify-center max-sm:px-4 m-auto h-[300px] max-lg:h-[250px]">
        <div className="text-white">
          <h3 className="text-5xl font-bold max-lg:text-3xl text-center">
            {props.heading}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CommonLanding;
