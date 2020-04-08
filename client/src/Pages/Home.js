import React from 'react';
import './style.css'
import Main from '../Components/Main'
import ProjectsContainer from '../Components/ProjectsContainer';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Main/>
                <ProjectsContainer/>
            </div>
        )
    }
}
export default Home