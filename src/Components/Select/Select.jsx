import "./Select.scss"
import "aos/dist/aos.css"
import React, { useEffect } from "react";
import Aos from "aos";

function Select() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <>
        <section className="select" data-aos="zoom-in">
            <div className="container">
                <div className="select__info">
                    <h2 className="select__heading">Select project,</h2>

                    <h3 className="select__h3">check dependencies, checkout branch, view 
                        readme.txt, install tools, run build, run test,</h3>

                    <h2 className="select__heading">start coding.</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default Select;