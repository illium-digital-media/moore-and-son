import PhotoGallery from "./PhotoGallery";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  content: string[];
  imageGallery: string[] | StaticImageData[];
  children?: ReactNode;
  invert?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  imageGallery,
  invert,
  children,
}) => {
  return (
    <div
      className={`flex max-w-screen-lg m-auto max-lg:px-4 ${
        invert ? "flex-row-reverse" : ""
      }`}
    >
      <div className="sm:w-2/4 flex rounded-xl">
        <div className="my-auto sm:px-10 ">
          <div className="sm:hidden pb-3">
            {imageGallery.length === 1 ? (
              <Image
                src={imageGallery[0]}
                alt={title}
                layout="responsive"
                objectFit="cover"
              />
            ) : (
              <PhotoGallery images={imageGallery} />
            )}
          </div>
          <h3 className="text-2xl font-bold pb-4">{title}</h3>
          {content.map((paragraph, index) => (
            <p className="pb-4" key={index}>{paragraph}</p>
          ))}
          {children}
        </div>
      </div>
      <div className="w-2/4 max-sm:hidden">
        {imageGallery.length === 1 ? (
          <Image
            src={imageGallery[0]}
            alt={title}
            layout="responsive"
            objectFit="cover"
            width={100}
            height={100}
          />
        ) : (
          <PhotoGallery images={imageGallery} />
        )}
      </div>
    </div>
  );
};

export default InfoCard;
