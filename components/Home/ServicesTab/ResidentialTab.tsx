import Link from "next/link";
import Image from "next/image";
import Check from "../../../assets/check.svg";
import CheckIcon from "@/components/Icons/Check";

const ResidentialTab: React.FC = () => {
  return (
    <div id="residential-tab">
      <p>
        Specialising in interior and exterior painting, we are fully equipped
        and trained to finish the job at the highest standard.
      </p>
      <br />
      <ul className="pb-5">
        <li>
          <div className="flex center-left pb-1 items-center">
            <div className="text-primary pr-2">
              <CheckIcon />
            </div>
            <p>Painting of walls and doors,</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1 items-center">
            <div className="text-primary pr-2">
              <CheckIcon />
            </div>

            <p>Repair and painting of window frames and sills.</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1 items-center">
            <div className="text-primary pr-2">
              <CheckIcon />
            </div>

            <p>General small carpentry jobs.</p>
          </div>
        </li>
        <li>
          <div className="flex center-left pb-1 items-center">
            <div className="text-primary pr-2">
              <CheckIcon />
            </div>

            <p>Tiling, etc.</p>
          </div>
        </li>
      </ul>

      <button className=" bg-primary text-white p-3 text-xs rounded font-bold uppercase border-2  border-primary mr-2">
        <Link href="/residential"> Read more</Link>
      </button>
    </div>
  );
};

export default ResidentialTab;
