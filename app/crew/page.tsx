import Header from "../components/Header/Header";
import Crewmans from "../components/Crewmans/Crewmans";
import './Crew.css'
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";

export default function Crew() {
  return (
    <>
      <main className="crew">
        <Header />
        <HeaderMobile />
        <div className="container flex">
          <p className="text-5"><strong>02</strong>Meet your crew</p>
          <Crewmans />
        </div>
      </main>
    </>
  )
}