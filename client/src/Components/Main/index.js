import React from 'react'
import "./style.css"
import headshot from "../../images/LowRezHeadshot.jpg"
import {Link} from "react-router-dom"
import "./style.css"


function Main(){
    const clickListener = ()=>{
        window.open('mailto:rgoderis789@gmail.com?subject=Reaching Out');
    }
    return(
        <div className="jumbotron container mt-5 background-primary">
            <h1 className="text-center text-white">Ryan Goderis</h1>
            <figure className="text-center container">
                <img src={headshot} alt="profile" className="img-thumbnail text-center p-0 m-0 w-25 border-0"/>
            </figure>
            <main className="container">
                <h3 className="text-center mt-5 mb-5 text-white">Front End Developer and Caffeine Addict</h3>
                <section className="text-center">
                    <p className="text-white">Front End JavaScript developer that excels in all work environments with a demonstrated ability to learn new skills and quickly adapt. 
                        Skilled with with front and back end languages as well as server side specific frameworks and databases. 
                        A quick learner that is enthusiastic in tackling new challenges with a passion for growing and developing as a programer.</p>
                </section>
                <section className="text-center">
                    <a href="rgoderis789@gmail.com" className="text-info btn btn-lg" onClick={clickListener}><i className="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/ryan-goderis" target="_blank" rel="noopener noreferrer" className="text-info btn btn-lg"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/rgoderis" target="_blank" rel="noopener noreferrer" className="text-info btn btn-lg"><i className="fab fa-github-square"></i></a>
                </section>
                <h5 className="text-center text-white">Interested in hearing more? Please send me a <Link to="/Contact" className="link">message</Link> or check out my <Link to="/Resume" className="link">resume</Link>!</h5>
            </main>
        </div>
    )
}

export default Main