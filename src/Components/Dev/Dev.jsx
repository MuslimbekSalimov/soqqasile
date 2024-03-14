import "./Dev.scss";
import Code from "../img/code.png";

function Dev() {
    return (
        <>
        <section className="dev">
            <div className="container">
                <div className="dev__info">
                    <h3 className="dev__heading">Think CI/CD for dev environments</h3>
                    <p className="dev__text">We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>

                    <div className="dev__buttons">
                        {/* <button className="dev__button1">
                           More on prebuilds
                        </button> */}

                        <button className="dev__button2">
                           Documentation
                        </button>
                    </div>
                </div>

                <picture>
                    <img src={Code} alt="Code" width={590} height={472}/>
                </picture>
            </div>
        </section>
        </>
    )
}

export default Dev;