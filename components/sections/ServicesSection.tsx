import Link from "next/link";
import React from "react";

interface CardData {
  imageUrl: string;
  heading: string;
  value: string;
  text: string;
  link: string;
}

const Card: React.FC<CardData> = ({ imageUrl, heading, text, value, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-4 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={`/services/${value}`}>
        <img src={imageUrl} alt="Card" className="w-full h-1/2 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{heading}</h3>
          <p className="text-gray-700">{text}</p>
        </div>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const cards: CardData[] = [
    {
      imageUrl: "https://via.placeholder.com/300",
      heading: "Commercial Painting",
      value: "commercial",
      text: "No commercial job is too big or too small!",
      link: "",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      heading: "Epoxy Coating",
      value: "epoxy",
      text: "Epoxy and polyurethane are great for protecting your floor against stains, damage, chemicals, oils, and wear.",
      link: "",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      heading: "Interior Painting",
      value: "interior",
      text: "Altech provides interior painting services to homeowners and business owners located in the Phoenix valley area.",
      link: "",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      heading: "Exterior Painting",
      value: "exterior",
      text: "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
      link: "",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          heading={card.heading}
          value={card.value}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ServicesSection;
