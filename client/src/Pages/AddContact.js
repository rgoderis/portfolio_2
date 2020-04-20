import React from 'react';
import axios from 'axios'
import Input from '../Components/Input'
import DropDown from "../Components/DropDown"

class AddContact extends React.Component{
    state = {
        states: ["","AL","AK", "AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA", "WA","WV","WI","WY"],
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        company: "",
        jobTitle: "",
        contactInfo: "",
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
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
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
    checkContact = ()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://immense-harbor-83008.herokuapp.com/api/users/rgoderis')
        .then(res=>{
            this.setState({contactInfo: res.data[0]})
        })
        .catch(err=>console.log(err))
    }

    componentDidMount(){
        this.checkContact()
    }
    render(){
        return(
            <div className="container">
                {this.state.contactAdded?
                <h1 className="text-center">New Contact Added</h1>:
                <div>
                <h1 className="text-center">{this.state.contactAdded?("Added New Contact"):("New Contact")}</h1>
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
                    <div className="form-group">
                        <label>Address</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <Input
                                    placeholder = "Address"
                                    type= "text"
                                    value = {this.state.address}
                                    onChange = {this.handleInputChange}
                                    name = "address"
                                />
                            </div>
                            <div className="col-lg-3">
                                <Input
                                    placeholder = "City"
                                    type= "text"
                                    value = {this.state.city}
                                    onChange = {this.handleInputChange}
                                    name = "city"
                                />
                            </div>
                            <div className="col-lg-1">
                                <DropDown
                                    array = {this.state.states}
                                    value = {this.state.state}
                                    onChange = {this.handleInputChange}
                                    name={"state"}
                                />
                            </div>
                            <div className="col-lg-2">
                                <Input
                                    placeholder = "Zip"
                                    type= "text"
                                    value = {this.state.zip}
                                    onChange = {this.handleInputChange}
                                    name = "zip"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-info btn-lg text-color" onClick={this.handleFormSubmit}>Add Contact</button>
                </form>
                </div>
                }
            </div>
        )
    }
}

export default AddContact