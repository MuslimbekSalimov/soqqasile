import "./Remont.scss";
import Remond from "../img/Code1.png";
import React from "react";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";
import Chrome from "../img/Chrome.png";
import Firefox from "../img/Firefox.png";

function Remont() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <>

        <section className="remont" data-aos="zoom-in">
            <div className="container">
                <div className="remont__info">
                    <h4 className="remont__heading">Remote-first. Secure by design.</h4>

                    <picture>
                        <img className="remond__img" src={Remond} alt="Remond" width={1269} height={821}/>
                    </picture>

                    <p className="remont__text">You no longer need an over-powered laptop to code, Gitpod works just as <br/> smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes<br/> all source code and never stores it on insecure machines and networks.</p>

                    <div className="remont__button--div">
                        <button className="remont__button1">
                            <img src={Chrome} alt="Chrome" width={24} height={24}/>
                            Chrome Extension
                        </button>

                        <button className="remont__button2">
                            <img src={Firefox} alt="Chrome" width={24} height={24}/>
                            Firefox Extension
                        </button>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Remont;