import Header from "../components/Header/Header"
import Destinations from "../components/Destinations/Destinations"
import './Destination.css'
import HeaderMobile from "../components/HeaderMobile/HeaderMobile"

export default function Destination() {
  return (
    <>
      <main className="destination">
        <Header />
        <HeaderMobile />
        <div className="container flex">
          <p className="text-5"><strong>01</strong>Pick your destination</p>
          <Destinations />
        </div>
      </main>
    </>
  )
}