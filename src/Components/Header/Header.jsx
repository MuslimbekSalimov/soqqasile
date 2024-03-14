import "./Header.scss"
import Logo from "../img/Logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <a href="#Logo">
                        <img className="header__logo" src={Logo} alt="Logo" width={131} height={41}/>
                    </a>

                    <nav className="list">
                        <li className="item">
                            <a className="link" href="#Features">Features</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">Pricing</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">Blog</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">Docs</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">Changelog</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">We're hiring</a>
                        </li>
                    </nav>
                    
                    {/* <button className="btn btn-dark rounded-3"> */}

                       <SignedOut>
                      <SignInButton />
                       </SignedOut>
                      <SignedIn>
                       <UserButton />
                      </SignedIn>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header