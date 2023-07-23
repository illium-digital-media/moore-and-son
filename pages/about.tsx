import AboutUsSection from "../components/sections/AboutUsSection";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";

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
      <h3>The AlTech Promise</h3>
      <p>
        Altech Painting LLC is an Arizona licensed contractor, ROC#297445, also
        bonded and insured professional painting service. Who provides
        professional services to homeowners and businesses owners across the
        valley in the Phoenix area. From the exterior of your home or business
        to the interior rooms or surrounding cool decks, no painting project is
        too large for us! We are committed to providing the highest level of
        professionalism, service response, and quality workmanship all at an
        affordable price.
      </p>

      <h3>Personal Profile</h3>
      <p>
        Hello, I am Andy! I am a 2nd generation painter with over 25 years in
        the professional painting industry as well as 12 years in Epoxy coating.
        All this experience lead me to starting AlTech Painting and have been
        continuously delivering top quality work and meeting all my customers
        needs. I have a personal interest and connection to every project. You
        do not deal with a middle man, there is no appraiser or estimator. All
        hoops are eliminated when you work with AlTech! When the phone rings, I
        will be the one to answer it. My passion for painting leaves each and
        every job looking flawless and the area clean upon exit. I give me word
        to all my customers that I will do everything possible to make the
        result exceed your expectations! I look forward to working with you,
        please Contact Me if you would like to get started, or view my Gallery
        to see some of my recent work. Thanks,
      </p>

      <AboutUsSection />
    </>
  );
};

export default AboutPage;
