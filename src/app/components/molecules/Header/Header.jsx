"use client";
import { useState } from "react";
import Image from "next/image";
import { LinkHeader } from "@/app/atoms/LinkHeader";
import { routes } from "./routes";
import { DrawerMenu } from "../DrawerMenu/DrawerMenu";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="flex justify-between items-center fixed top-0 z-50 h-20 w-full rounded-none  py-2 px-14 lg:px-24 lg:py-4  bg-white bg-opacity-70">
      <Image
        src="/logo_ingenia.png"
        height="100"
        width="50"
        style={{ width: "110px", height: "40px" }}
        alt="logo"
        priority
      />
      <div className="hidden md:flex">
        <LinkHeader route={routes.about}>ABOUT US</LinkHeader>
        <LinkHeader route={routes.work}>OUR WORK</LinkHeader>
        <LinkHeader route={routes.contact}>CONTACT</LinkHeader>
        <LinkHeader route={routes.manifest}>MANIFIESTO</LinkHeader>
      </div>
      <Image
        onClick={handleCloseDrawer}
        height={20}
        width={20}
        priority
        alt="menu"
        src="/svg/menu-icon.svg"
        className="flex cursor-pointer transition-all duration-300 ease-in-out md:hidden"
      />
      <DrawerMenu openDrawer={openDrawer} closeDrawer={handleCloseDrawer} />
    </div>
  );
};
