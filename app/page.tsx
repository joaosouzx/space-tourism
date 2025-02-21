import Link from 'next/link';
import Header from './components/Header/Header';
import './Home.css'
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

export default function Home() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main className='home'>
        <div className="container flex">
          <div>
            <p className="text-5">So, you want to travel to</p>
            <p className="text-1">Space</p>
            <p className="text-9">Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
          </div>
          <div>
            <Link href={'/destination'}>
              <button className="text-4">Explore</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
