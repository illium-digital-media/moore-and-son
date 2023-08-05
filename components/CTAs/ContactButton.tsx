import Link from "next/link";

const ContactButton: React.FC = () => {
  return (
    <Link href="/contact">
      <button className="max-sm:w-full bg-primary text-white p-3 text-xs rounded font-bold uppercase border-2  border-primary mr-2  hover:bg-white hover:text-primary hover:border-primary duration-200">
        Contact Us
      </button>
    </Link>
  );
};

export default ContactButton;
