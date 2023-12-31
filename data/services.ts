import Interior1 from "/assets/interior1.jpeg";
import Interior2 from "/assets/interior2.jpeg";
import Exterior1 from "/assets/exterior1.jpeg";
import Exterior2 from "/assets/exterior2.jpeg";
import Commercial1 from "/assets/commercial1.jpeg";
import Commercial2 from "/assets/commercial2.jpeg";

const servicesData = {
    commercial: {
        topper: "Commercial",
        heading: "Commercial Painting",
        title: "Where Quality Meets Professionalism",
        meta: "Moore and Son deliver professional commercial painting services across Coventry. Specializing in businesses of all sizes, we guarantee minimal disruption and premium results. Explore our approach to transforming your commercial space with expert precision and efficiency.",
        paragraph:
            "In the bustling commercial hubs of the UK, first impressions can set the tone for lasting business relationships. A pristine paint job speaks volumes about the professionalism and care a business invests in its appearance. At Moore and Son, we harness our deep understanding of commercial spaces to recommend the right product and technique for each project. This not only ensures a captivating appearance but also guarantees durability in high-traffic environments.",
        images: [Commercial1, Commercial2],
        bulletPoints: [
            "Office Space Painting",
            "Industrial Painting",
            "Epoxy Coatings",
            "Steel Painting",
            "Graffiti Coatings",
            "Waterproofing Applications",
            "Durability Coatings",
            "Maintenance Painting",
        ],

    },
    interior: {
        topper: "Interior",
        heading: "Interior Painting",
        title: "Colors That Reflect Your Style",
        meta: "Enhance your indoor living spaces with Moore and Son's interior painting services in Coventry. Our meticulous attention to detail ensures a flawless finish for every room. Discover how our bespoke painting solutions can reflect your style and elevate your home.",
        paragraph:
            "In the cosy homes and dynamic businesses of Coventry and beyond, interior painting plays a pivotal role in setting the ambiance. Ensuring a top-notch paint job is integral to creating spaces that reflect warmth, comfort, and character. Our team at Moore and Son provides insights into the best products and application methods, promising not just a visually pleasing result but an environment that resonates with its inhabitants.",
        images: [Interior1, Interior2],
        bulletPoints: [
            "Wall Painting",
            "Trim Painting",
            "Cabinet Refinishing",
            "Wallpaper Removal",
            "Drywall Texturing",
            "Accent Walls",
            "Odor Sealing",
            "Color Touch-Ups",
        ],

    },
    exterior: {
        topper: "Exterior",
        heading: "Exterior Painting",
        title: "Finishes That Stand the Test of Time",
        meta: "Protect and beautify your property with Moore and Son's exterior painting services. Our expertise in Coventry's climate ensures long-lasting finishes that withstand the elements. Learn about our thorough process and how it can enhance your building's curb appeal.",
        paragraph:
            "The diverse weather conditions in the UK make exterior painting a critical aspect of property maintenance. A meticulously executed paint job is essential for preserving the external charm of any structure. With Moore and Son's expertise, we guide you in selecting the most suitable products and application methods, delivering a result that not only amplifies beauty but stands as a protective shield against the elements.",
        images: [Exterior1, Exterior2],
        bulletPoints: [
            "Pressure Washing",
            "Exterior Staining",
            "Fence Staining",
            "Deck Staining",
            "Outbuilding Painting",
            "Complete Exterior Painting",
            "Rot Replacement",
            "Deck Repair",
        ],
    },
};

export default servicesData;