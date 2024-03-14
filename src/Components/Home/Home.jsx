import "./Home.scss"
import Hero from "../Hero/Hero";
// import Header from "../Header/Header";
import Select from "../Select/Select";
import  Dev from "../Dev/Dev";
import Remont from "../Remont/Remont";

function Home() {
    return (
        <div className="container">
            {/* <Header/> */}
            <Hero/>
            <Select/>
            <Dev/>
            <Remont/>
        </div>
    )
}

export default Home;