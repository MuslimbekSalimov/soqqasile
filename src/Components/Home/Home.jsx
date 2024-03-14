import "./Home.scss"
import Hero from "../Hero/Hero";
// import Header from "../Header/Header";
import Select from "../Select/Select";
import  Dev from "../Dev/Dev"

function Home() {
    return (
        <div className="container">
            {/* <Header/> */}
            <Hero/>
            <Select/>
            <Dev/>
        </div>
    )
}

export default Home;