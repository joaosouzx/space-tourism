"use client"

import Image from "next/image";
import './Header.css';
import { usePathname } from "next/navigation";
import Link from "next/link";

const headerLinks = [
  { number: '00', name: "Home", href: "/" },
  { number: '01', name: "Destination", href: "/destination" },
  { number: '02', name: "Crew", href: "/crew" },
  { number: '03', name: "Technology", href: "/technology" },
]

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div>
          <Image src="/assets/shared/logo.svg" alt="logo" width={48} height={48} />
        </div>
        <div className="header-line"></div>
        <div>
          <nav>
            <ul>
              {headerLinks.map((link) => (
                <li key={link.number}>
                  <Link className={`${pathname === `${link.href}` ? 'active' : ''} btn text-8`} href={link.href}><strong>{link.number}</strong>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}