import "./Hero.scss"
import "aos/dist/aos.css"
import React, { useEffect } from "react";
import Aos from "aos";
import GitLAb from "../img/GitLab.png";
import GitHub from "../img/GitHub.png";
import Blue from "../img/Blue.png";
import Material from "../img/Material.png";

function Hero() {
    useEffect(() => {
        Aos.init({duration:200});
    }, [])
    return (
        <>

        <section className="hero">
            <div className="container">
                <div className="hero__info">
                    <div className="hero__info--div" data-aos="fade-right">
                        <h1 className="hero__heading">Always <br/> Ready to Code.</h1>
                        <p className="hero__text">Spin up fresh, automated dev environments <br/> for each task, in the cloud, in seconds.</p>

                        <div className="hero__button--div">
                            <button className="btn btn-warning hero__button--try">Try Now</button>
                            <p className="btn btn-white hero__button--open">Open a workspace.  <br/>
                                Start from any Git context.</p> 
                        </div>

                        <div className="apps__div">
                            <a className="apps__link" href="#GitLab">
                                <img src={GitLAb} alt="GitLAb" width={29} height={29}/>
                            </a>

                            <a className="apps__link" href="#GitLab">
                                <img src={GitHub} alt="GitHub" width={29} height={29}/>
                            </a>

                            <a className="apps__link" href="#GitLab">
                                <img src={Blue} alt="Blue" width={29} height={29}/>
                            </a>
                        </div>
                    </div>

                    <picture data-aos="fade-left">
                        <img src={Material} alt="Material" width={700} height={672}/>
                    </picture>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;