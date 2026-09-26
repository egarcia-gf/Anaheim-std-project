
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="header"></div>
        <div className="hero-img">
          <Image src="/img/Anaheim-hero.webp" alt="Anaheim STD hero" width={1980} height={720} priority/>
        </div>
      </div>
    </>
  );
}