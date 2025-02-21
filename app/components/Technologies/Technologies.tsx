"use client"

import Image from "next/image";
import './Technologies.css'
import { useState } from "react";

const technologies = [
  {
    id: 1,
    title: "Launch vehicle",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "/assets/technology/image-launch-vehicle"
  },
  {
    id: 2,
    title: "Spaceport",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "/assets/technology/image-spaceport"
  },
  {
    id: 3,
    title: "Space capsule",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "/assets/technology/image-space-capsule"
  },
]

export default function Technologies() {
  const [selected, setSelected] = useState(technologies[0])

  function showImg() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      return <Image src={`${selected.image}-portrait.jpg`} alt={selected.title} fill />
    } else {
      return <Image src={`${selected.image}-landscape.jpg`} alt={selected.title} fill />
    }
  }

  return (
    <div className="tech">
      <div className="container">
        <div className="tech-content">
          <div className="tech-pagination">
            {technologies.map((tech) => (
              <button
                type="button"
                key={tech.id}
                onClick={() => setSelected(tech)}
              >
                {tech.id === selected.id
                  ? <div className="pagination pagination-active text-4">
                    {tech.id}
                  </div>
                  : <div className="pagination text-4">
                    {tech.id}
                  </div>}
              </button>
            ))}
          </div>
          <div className="tech-description">
            <p className="text-4">The terminology...</p>
            <p className="text-3">{selected.title}</p>
            <p className="text-9">{selected.description}</p>
          </div>
        </div>
        <div className="tech-image">
          {showImg()}
        </div>
      </div>
    </div>
  )
}