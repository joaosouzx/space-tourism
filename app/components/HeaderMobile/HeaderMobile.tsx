"use client"

import Image from "next/image";
import './HeaderMobile.css';
import { usePathname } from "next/navigation";
import Link from "next/link";

const headerLinks = [
  { number: '00', name: "Home", href: "/" },
  { number: '01', name: "Destination", href: "/destination" },
  { number: '02', name: "Crew", href: "/crew" },
  { number: '03', name: "Technology", href: "/technology" },
]

function showMenu() {
  let nav = document.getElementById("menu") as HTMLElement | null;
  if (!nav) return;

  nav.classList.toggle("collapse")
}


export default function HeaderMobile() {
  const pathname = usePathname();

  return (
    <header className="headerMobile">
      <div className="container">
        <div>
          <Image src="/assets/shared/logo.svg" alt="logo" width={48} height={48} />
        </div>
        <div></div>
        <div>
          <button type="button" onClick={() => showMenu()}>
            <Image src="/assets/shared/icon-hamburger.svg" alt="menu" width={24} height={21} />
          </button>
        </div>
      </div>
      <nav id="menu" data-toggle="collapsed">
        <div>
          <button type="button" onClick={() => showMenu()}>
            <Image src="/assets/shared/icon-close.svg" alt="menu" width={20} height={21} />
          </button>
        </div>
        <ul>
          {headerLinks.map((link) => (
            <li key={link.number}>
              <Link className={`${pathname === `${link.href}` ? 'active' : ''} btn text-8`} href={link.href}><strong>{link.number}</strong>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}