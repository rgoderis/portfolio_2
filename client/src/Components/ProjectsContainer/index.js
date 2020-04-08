import React from 'react';
import projects from '../../projects'

class ProjectsContainer extends React.Component{
    state={
        projects,
        currentProject:0
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
            <div className="jumbotron container text-center">
                <div>
                    <h4>{this.state.projects[this.state.currentProject].name}</h4>
                    <img src={this.state.projects[this.state.currentProject].image} className="w-75" alt={this.state.projects[this.state.currentProject].name}/>
                    <p>{this.state.projects[this.state.currentProject].description}</p>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-lg bg-info" onClick={this.previousProject}>Previous Project</button>
                        </div>
                        <div className="col-3">
                            <a className="btn btn-lg text-info" href={this.state.projects[this.state.currentProject].link} target="_blank" rel="noopener noreferrer" ><i className="fas fa-link"></i></a>
                        </div>
                        <div className="col-3">
                            <a className="btn btn-lg text-info"  href={this.state.projects[this.state.currentProject].github} target="_blank" rel="noopener noreferrer" ><i className="fab fa-github-square"></i></a>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-lg bg-info" onClick={this.nextProject}>Next Project</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer