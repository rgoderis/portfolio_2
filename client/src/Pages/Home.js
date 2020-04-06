import React from 'react';
import './style.css'

class Home extends React.Component{
    render(){
        return(
            <div className="jumbotron container mt-5 background-primary">
                <h1 className="text-center text-white">Ryan Goderis</h1>
                <figure className="text-center container">
                    <p>image</p>
                </figure>
                <main className="container">
                    <h2 className="text-center mt-5 mb-5 text-white">Front End Developer and Caffeine Addict</h2>
                    <section className="text-center">
                        <p className="text-white">Full Stack JavaScript developer that excels in all work environments with a demonstrated ability to learn new skills and quickly adapt. 
                            Skilled with with front and back end languages as well as server side specific frameworks and databases. 
                            A quick learner that is enthusiastic in tackling new challenges with a passion for growing and developing as a programer.</p>
                    </section>
                    <section className="text-center">
                        <a href="rgoderis789@gmail.com" className="text-info btn btn-lg"><i class="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/ryan-goderis" className="text-info btn btn-lg"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/rgoderis" className="text-info btn btn-lg"><i className="fab fa-github-square"></i></a>
                    </section>
                </main>
            </div>
        )
    }
}
export default Home