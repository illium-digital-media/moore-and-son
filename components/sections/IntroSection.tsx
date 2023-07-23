const IntroSection: React.FC = () => {
  const items = [
    {
      heading: "Exterior Painting",
      copy: "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
    },
    {
      heading: "Interior Painting",
      copy: "Interior Painting Altech provides interior painting services to homeowners and business owners located in the Phoenix valley area.",
    },
    {
      heading: "Epoxy Coating",
      copy: "Epoxy and polyurethane are great for protecting your floor against stains, damage, chemicals, oils, and wear.",
    },
  ];

  return (
    <div className="bg-gray-500 text-white">
      <div className="max-w-screen-lg m-auto max-sm:px-4 flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-grow py-10 ${
              index === 1
                ? "px-4" // Add padding left and right for the middle item
                : index === 0
                ? "pr-4" // Add padding right for the first item
                : "pl-4" // Add padding left for the last item
            } ${
              index === 1 ? "border-l border-r" : index === 0 ? "border-r" : "border-l"
            }`}
          >
            <h3 className="font-bold text-2xl pb-2">{item.heading}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
