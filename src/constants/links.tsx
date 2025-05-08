import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export const NavbarLinks = [
    {
        id: 1,
        title: "Inicio",
        href: "/",
    },
    {
        id: 2,
        title: "Reciclaje",
        href: "/reciclaje",
    },
    {
        id: 3,
        title: "Sobre nosotros",
        href: "/nosotros",
    }
];

export const FooterLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "https://www.facebook.com/",
        icon: <FaFacebookF />,
    },
    {
        id: 2,
        title: "Instagram",
        href: "https://www.instagram.com/",
        icon: <FaInstagram/>,
    },
    {
        id: 3,
        title: "Twitter",
        href: "https://twitter.com/",
        icon: <FaTwitter/>,
    }
]

