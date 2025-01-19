import React from "react";
import Image from "next/image";

type Props = {};
const menuItems = [
  ["gifts", "/gifts"],
  ["about", "/"],
  ["best", "/"],
  ["contacts", "/"],
];

const classNames = {
  actionSmall: "font-semibold text-xs tracking-wider uppercase",
};

export const Header = (props: Props) => {
  return (
    <header className="flex justify-center items-center w-full h-16 py-0 px-2">
      <div className="flex justify-between items-center gap-3 w-full max-w-7xl h-16 py-3 px-0">
        <a
          href="/"
          className="flex items-center gap-2 h-10 py-2 px-5 rounded-xl"
        >
          <Image
            src="/snowflake.svg"
            alt="logo"
            width={24}
            height={24}
            priority
          />
          <span className={`${classNames.actionSmall}`}>The gifts</span>
        </a>
        <nav>
          <ul className="flex justify-center items-center gap-2">
            {menuItems.map(([title, url]) => (
              <li>
                <a
                  href={url}
                  className={`${classNames.actionSmall} rounded-xl py-3 px-5 transition-all hover:text-red-500 hover:bg-red-500 hover:bg-opacity-10`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
