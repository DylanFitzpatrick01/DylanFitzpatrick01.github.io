import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from "next/image";
import headshot from '../../images/headshot.png';

export default function App() {
    return (
        <Navbar shouldHideOnScroll className="flex gap-2 py-2 pl-2 bg-emerald-500">
            <NavbarBrand>
                <Link href="../../" className="flex gap-1">
                    <Image
                        className="rounded-full"
                        src={headshot}
                        width={30}
                        height={30}
                        alt="Headshot of Dylan Fitzpatrick"
                    />
                    <p className="font-bold">Dylan Fitzpatrick</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4 justify-start">
                <NavbarItem>
                    <Link href="../../about-me" className="hover:text-gray-300">
                        About Me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="../../experience" className="hover:text-gray-300">
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="../../education" className="hover:text-gray-300">
                        Education
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="../../projects" className="hover:text-gray-300">
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}