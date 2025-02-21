"use client"

import Image from "next/image";
import './Crewmans.css'
import { useState } from "react";

const crewmans = [
  {
    id: 0,
    name: "Douglas Hurley",
    role: "Commander",
    description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/assets/crew/image-douglas-hurley.webp",
    width: 514,
    height: 700
  },
  {
    id: 1,
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/assets/crew/image-mark-shuttleworth.webp",
    width: 433,
    height: 640
  },
  {
    id: 2,
    name: "Victor Glover",
    role: "Pilot",
    description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/assets/crew/image-victor-glover.webp",
    width: 549,
    height: 645
  },
  {
    id: 3,
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/assets/crew/image-anousheh-ansari.webp",
    width: 575,
    height: 602
  },
]

export default function Crewmans() {
  const [selected, setSelected] = useState(crewmans[0])

  return (
    <div className="crewmans">
      <div className="container">
        <div className="crewman-content">
          <div className="crewman-description">
            <p className="text-4">{selected.role}</p>
            <p className="text-3">{selected.name}</p>
            <p className="text-9">{selected.description}</p>
          </div>
          <div className="crewman-pagination">
            {crewmans.map((crewman) => (
              <button
                type="button"
                key={crewman.id}
                onClick={() => setSelected(crewman)}
              >
                {crewman.id === selected.id
                  ? <div className="pagination pagination-active"></div>
                  : <div className="pagination"></div>}
              </button>
            ))
            }
          </div>
        </div>
        <div className="crewman-image">
          <Image src={selected.image} alt={selected.name} fill />
        </div>
      </div>
    </div>
  )
}