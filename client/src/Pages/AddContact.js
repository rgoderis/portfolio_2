import React from 'react';
import API from '../utils/API'

class AddContact extends React.Component{

    componentDidMount(){
        API.checkContact()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default AddContact