import AboutUsSection from "../components/sections/AboutUsSection";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import ProfilePicture from "../assets/profile-pic.jpg";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

const personalProfile = [
  "Hello there, I&apos;m John Lawson, the proud founder of Brushstrokes Painting & Decorating. My love for art and design began at a young age and led me to pursue a career in painting and decorating.",
  "My journey started with an apprenticeship under well-known local decorators, where I honed my skills and mastered the craft. This experience was invaluable, inspiring me to start my own venture.",
  "With a clear vision in mind, I established Brushstrokes, aiming to provide top-notch painting and decorating services that would transform spaces and bring out the unique personality of each client",
  "Today, I continue to lead our diverse team of professionals, pouring my keen attention to detail, commitment to excellence, and passion for the craft into every project. It&apos;s this ethos and dedication that sets Brushstrokes apart.",
];



const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"About Us"} />
      <Section index={0}>
        <div className="max-w-screen-lg m-auto">
          <h3 className="text-2xl font-bold pb-4">The Brushstrokes Promise</h3>
          <p className="pb-2">
            Brushstrokes Painting & Decorating offers professional painting and
            decorating services for residential and commercial clients. With
            years of industry experience, our skilled team is adept at handling
            various projects from revamping exteriors, interiors to executing
            large-scale commercial projects.
          </p>
          <p>
            We pride ourselves on high-quality work and superior customer
            service. We strive to transform your spaces to reflect your style
            and personality. With our attention to detail and commitment to
            quality, we&apos;re your trusted choice for all painting and decorating
            needs. Trust us to infuse your life with color and style.
          </p>
        </div>
      </Section>
      <Section index={1}>
        <InfoCard
          title="Personal Profile"
          content={personalProfile}
          imageGallery={[ProfilePicture]}
          invert={true}
        />
      </Section>

      <Section index={2}>
        <AboutUsSection />
      </Section>
    </>
  );
};

export default AboutPage;
