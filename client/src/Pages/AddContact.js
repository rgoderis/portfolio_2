import React from 'react';
import axios from 'axios'
import Input from '../Components/Input'

class AddContact extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
        contactAdded: false
    }

    handleInputChange = event=>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        if(!this.state.firstName && !this.state.lastName){
            console.log("Please enter a first and last name");
            return false
        } else if(!this.state.phoneNumber && !this.state.email){
            if(this.state.email.length > 0 && !this.state.email.includes("@") && !this.state.email.includes(".")){
                console.log("Please enter a vailid email")
                return false
            }
            console.log("Please enter a email or phone number")
            return false
        } else {
            axios.post('https://cors-anywhere.herokuapp.com/https://immense-harbor-83008.herokuapp.com/api/users/rgoderis', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                company: this.state.company,
                jobTitle: this.state.jobTitle
            })
            .then(res=>{
                if(res.status=== 200){
                    this.setState({contactAdded: true})
                }
                else {
                    console.log(res.status)
                    alert("Sorry something went wrong, please try again later")
                }
            })
            .catch(err=>console.log(err))
        }
    }

    componentDidMount(){
        this.checkContact()
    }
    render(){
        return(
            <div className="container">
                {this.state.contactAdded?
                <h1 className="text-center">Contact Information Added</h1>:
                <div>
                <h2 className="text-center mb-5 mt-5">Interested in Hearing More?</h2>
                <h3>Email me by clicking here or fill out the information below and I will respond ASAP!</h3>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>First Name</label>
                                <Input
                                    placeholder = "First Name"
                                    type= "text"
                                    value = {this.state.firstName}
                                    onChange = {this.handleInputChange}
                                    name = "firstName"
                                />
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name</label>
                                <Input
                                    placeholder = "Last Name"
                                    type= "text"
                                    value = {this.state.lastName}
                                    onChange = {this.handleInputChange}
                                    name = "lastName"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Email</label>
                                <Input
                                    placeholder = "Email"
                                    type= "email"
                                    value={this.state.email}
                                    onChange = {this.handleInputChange}
                                    name = "email"
                                />
                            </div>
                            <div className="col-lg-2">
                                <label>Phone Number</label>
                                <Input
                                    placeholder = "Phone Number"
                                    type= "tel"
                                    value = {this.state.phoneNumber}
                                    onChange = {this.handleInputChange}
                                    name = "phoneNumber"
                                />
                            </div>
                            <div className="col-lg-3">
                                <label>Company</label>
                                <Input
                                    value = {this.state.company}
                                    onChange = {this.handleInputChange}
                                    name={"company"}
                                />
                            </div>
                            <div className="col-lg-3">
                                <label>Job Title</label>
                                <Input
                                    value = {this.state.jobTitle}
                                    onChange = {this.handleInputChange}
                                    name={"jobTitle"}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-info btn-lg text-color mt-2" onClick={this.handleFormSubmit}>Add Contact</button>
                </form>
                </div>
                }
            </div>
        )
    }
}

export default AddContact