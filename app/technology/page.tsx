import Header from "../components/Header/Header";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import Technologies from "../components/Technologies/Technologies";
import './Technology.css'

export default function Technology() {
  return (
    <>
      <main className="technology">
        <Header />
        <HeaderMobile />
        <div className="container flex">
          <p className="text-5"><strong>03</strong>Space Launch 101</p>
          <Technologies />
        </div>
      </main>
    </>
  )
}