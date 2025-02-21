"use client"

import Image from "next/image";
import './Destinations.css'
import { useState } from "react";

const destinations = [
  {
    id: 0,
    title: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: "/assets/destination/image-moon.webp"
  },
  {
    id: 1,
    title: "Mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
    image: "/assets/destination/image-mars.webp"

  },
  {
    id: 2,
    title: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    image: "/assets/destination/image-europa.webp"
  },
  {
    id: 3,
    title: "Titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    image: "/assets/destination/image-titan.webp"

  },
]

export default function Destinations() {
  const [selected, setSelected] = useState(destinations[0])

  return (
    <div className="destinations">
      <div className="container flex">
        <div className="destination-image">
          <Image src={selected.image} alt={selected.title} fill />
        </div>
        <div className="destination-content">
          <div className="destination-menu">
            {destinations.map((destination) => (
              <button
                className="destination-menu-btn text-8"
                type="button"
                key={destination.id}
                onClick={() => setSelected(destination)}
              >
                {destination.id === selected.id
                  ? <p className="active btn text-8">{destination.title}</p>
                  : <p className="btn text-8">{destination.title}</p>}

              </button>
            ))}
          </div>
          <div className="destination-description">
            <p className="text-2">{selected.title}</p>
            <p className="text-9">{selected.description}</p>
            <div className="destination-line"></div>
            <div className="destination-statistics">
              <div>
                <p className="text-7">AVG. DISTANCE</p>
                <p className="text-6">{selected.distance}</p>
              </div>
              <div>
                <p className="text-7">EST. TRAVEL TIME</p>
                <p className="text-6">{selected.travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}