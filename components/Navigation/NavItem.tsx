import Link from "next/link";
import React, { useState } from "react";

// Define the type for subMenuItems
type SubMenuItem = {
  pageLink: string;
  copy: string;
};

const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  return (
    <li className="p-3 m-auto uppercase text-sm font-bold text-blue-900  hover:border-b hover:border-blue-900  duration-200 relative">
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
