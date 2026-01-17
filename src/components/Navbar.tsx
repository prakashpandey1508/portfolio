"use client";

import useDeviceContext from "@/customHooks/useDeviceContext";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import navItems from "@/data/navitems";
import { useEffect, useState } from "react";

const Navbar = () => {
    const device = useDeviceContext();
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null; // Prevent SSR mismatch
    return(
        <>
         {device?.isDesktop ? (<NavbarDesktop navItems={navItems}/>):(<NavbarMobile navItems={navItems}/>)}
        </>
    );
};

export default Navbar;