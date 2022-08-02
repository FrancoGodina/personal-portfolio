import "./Projects.css";
import { Icon } from '@iconify/react';
import pcbuilder from "../images/pcbuilder.png";
import shoppingcart from "../images/shoppingcart.png";
import memorygame from "../images/memorygame.png";
import restaurantpage from "../images/restaurantpage.png";
import membersonly from "../images/members-only.png";
import weatherapp from "../images/weatherapp.png"

function Projects() {
    return(
        <div className="main-container">
            <div>
            <h1>My <span className="text-red">Projects</span></h1>
            </div>
            <div className="project-container">
                <div className="project">
                    <img src={membersonly} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title">Members only</section>
                        <section className="description">
                            This web app hosts an exclusive clubhouse where your members can write anonymous posts. Inside the clubhouse, members can see who the author of a post is. You can also become an admin and delete messages. The page renders different views based on what kind of user you are(normal user, member, admin). Passwords are encrypted using bcrypt.
                            <br /><br />
                            Back-End: Node.js/Express
                            <br />
                            Database: MongoDB
                            <br />
                            Front-End: Bootstrap 5, Pug.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://pacific-shelf-41686.herokuapp.com/">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/members-only">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
                <div className="project">
                    <img src={pcbuilder} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title"> Express pc builder</section>
                        <section className="description">
                            Inventory App that includes categories and items. Each of these include all of the CRUD Methods, so anybody that's visiting the site can Create, Read, Update or Delete any items or category.
                            <br /><br />
                            Back-End: Node.js/Express 
                            <br />
                            Database: MongoDB
                            <br />
                            Front-End: HTML, Bootstrap 5, Pug.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://infinite-temple-59082.herokuapp.com/catalog">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/express-pc-builder">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
                <div className="project">
                    <img src={shoppingcart} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title"> Shopping cart</section>
                        <section className="description">
                            A simple shopping cart application. It allows users to add items to the cart and then remove or add more of each from the cart's section.
                            <br /><br />
                            Front-End: HTML, CSS, JavaScript, React.js.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://francogodina.github.io/shopping-cart/">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/shopping-cart">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
                <div className="project">
                    <img src={memorygame} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title">Memory game</section>
                        <section className="description">
                            Memory game created with React. You'll be presented with multiple images. The images will shuffle every-time they are clicked. DO NOT click any images twice, else the score will reset to zero. The goal is to get the highest score possible.
                            <br /><br />
                            Front-End: HTML, CSS, JavaScript, React.js.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://francogodina.github.io/memory-game/">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/memory-game">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
                <div className="project">
                    <img src={weatherapp} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title">Weather App</section>
                        <section className="description">
                            A weather app that shows current weather for a city. It uses OpenWeatherMap API to fetch current weather.
                            <br /><br />
                            Back-end: OpenWeatherMapAPI.
                            <br />
                            Front-End: HTML, CSS, JavaScript.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://francogodina.github.io/Weather-App/">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/Weather-App">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
                <div className="project">
                    <img src={restaurantpage} alt="Main page of the project" className="project-image"></img>
                    <div className="information">
                        <section className="title"> Restaurant page</section>
                        <section className="description">
                            Restaurant page made with Webpack. It contains various sections, each with different information.
                            <br /><br />
                            Front-End: HTML, CSS, JavaScript, Webpack.
                        </section>
                        <section className="project-button">
                        <a className="livedemo" target="blank" href="https://francogodina.github.io/Restaurant-Page/">
                            Live demo <Icon icon="bi:laptop" inline={true} />
                        </a>
                        <a className="code" target="blank" href="https://github.com/FrancoGodina/Restaurant-Page">
                            Code <Icon icon="akar-icons:github-fill" inline={true} />
                        </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;