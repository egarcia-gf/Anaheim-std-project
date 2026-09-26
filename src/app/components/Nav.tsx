import Link from "next/link"
import Image from "next/image"

const Nav = () => {
    return (
        <div className="nav">
            <div className="col">
                <div className="nav-logo">
                    <Link href="/">
                    <Image src="/img/Anaheim-std-logo-black.svg" alt="Anaheim STD" width={240} height={80} />
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="nav-items">
                    <div className="nav-item">
                        <Link href="/work">Work</Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/studio">Studio</Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="nav-copy">
                    <p>Anaheim, CA</p>
                </div>
            </div>
        </div>
    )
}

export default Nav