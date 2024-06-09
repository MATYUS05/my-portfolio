import React from "react";
import "./index.css";
import Navbar from "./component/navbar/navbar";
import Main from "./component/main/main";
import About from "./component/about/about";
import Skill from "./component/skill/skill";
import Project from "./component/project/project";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

const App = () => {
    return(
        <div>
            <Navbar />
            <Main />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App