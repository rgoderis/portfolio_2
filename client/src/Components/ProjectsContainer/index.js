import React from 'react';
import projects from '../../projects';
import './style.css'

class ProjectsContainer extends React.Component{
    state={
        projects,
        currentProject:1
    }
    nextProject = ()=>{
        if(this.state.currentProject=== this.state.projects.length-1){
            return false
        } else {
            this.setState({currentProject: this.state.currentProject+1})
        }
    }
    previousProject = ()=>{
        if(this.state.currentProject === 0){
            return false
        } else {
            this.setState({currentProject: this.state.currentProject-1})
        }
    }

    render(){
        console.log(this.state.projects)
        return(
            <div className="jumbotron container text-center background">
                <div>
                    <h4 className="text-white">{this.state.projects[this.state.currentProject].name}</h4>
                    <div className="row">
                        <div className="col-2">
                            <button className="btn btn-lg bg-info mt-5 text-color" onClick={this.previousProject}><i className="fas fa-arrow-alt-circle-left"></i></button>
                        </div>
                        <div className="col-8">
                        <img src={this.state.projects[this.state.currentProject].image} className="w-100" alt={this.state.projects[this.state.currentProject].name}/>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-lg bg-info mt-5 text-color" onClick={this.nextProject}><i className="fas fa-arrow-alt-circle-right"></i></button>
                        </div>
                    </div>
                    <p className="px-5 text-white">{this.state.projects[this.state.currentProject].description}</p>
                    <a className="btn btn-lg bg-info mx-5 text-color" href={this.state.projects[this.state.currentProject].link} target="_blank" rel="noopener noreferrer" ><i className="fas fa-link"></i></a>
                    <a className="btn btn-lg bg-info mx-5 text-color"  href={this.state.projects[this.state.currentProject].github} target="_blank" rel="noopener noreferrer" ><i className="fab fa-github-square"></i></a>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer