import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
    return(
        <div className="home">
            <h1>I'm <span className="home-name">Franco Godina</span></h1>
            <h1>An Aspiring Web Developer</h1>
            <div className="home-buttons">
                <Link className="home-about" to="/about">
                    About me
                </Link>
                <Link className="home-projects" to="/projects">
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default Home;