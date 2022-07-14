import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return(
        <div className="header-container">
            <ul>
                <div>
                    <li>
                        <Link className="header-name" to="/">
                            Franco Godina
                        </Link>
                    </li>
                </div>
                <div>
                    <li>
                            <Link className="header-right" to="/about">
                                About
                            </Link>
                    </li>
                    <li>
                        <Link className="header-right" to="/projects">
                            Projects
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Header;