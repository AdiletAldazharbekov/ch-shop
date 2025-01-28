"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-center items-center w-full h-16 py-0 px-2">
      <div className="flex justify-between items-center gap-3 w-full max-w-7xl h-16 py-3 px-0">
        <Link
          href="/"
          className="flex justify-start items-center gap-2 w-fit h-10 py-2 px-5 rounded-xl"
        >
          <Image
            src="/snowflake.svg"
            alt="logo"
            width={24}
            height={24}
            priority
          />
          <span className={`${classNames.actionSmall}`}>The gifts</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center gap-2">
            {menuItems.map(([title, url]) => (
              <li key={title}>
                <Link
                  href={url}
                  className={`${classNames.actionSmall} rounded-xl py-3 px-5 transition-all hover:text-red-500 hover:bg-red-500 hover:bg-opacity-10`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col-reverse md:hidden">
          <nav
            className={`fixed top-16 z-50 flex flex-col justify-center items-center w-full h-full bg-white transition-all duration-1000 ${
              isMenuOpen
                ? "right-0 translate-x-0"
                : "right-[-100%] translate-x-full"
            }`}
          >
            <ul className="flex flex-col justify-center items-center gap-2">
              {menuItems.map(([title, url]) => (
                <li className="py-3 px-5" key={title}>
                  <Link
                    href={url}
                    className="font-semibold text-2xl tracking-widest uppercase py-3 px-5 rounded-xl transition-all  hover:text-red-500 hover:bg-red-500 hover:bg-opacity-10"
                    onClick={() => setIsMenuOpen(false)} // Закрыть меню при переходе
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="flex flex-col justify-center items-center gap-2 w-10 h-10 bg-none rounded-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleHandler}
          >
            <span
              className={`block w-5 h-[1px] bg-slate-950 transition-all  ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-[1px] bg-slate-950 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};
