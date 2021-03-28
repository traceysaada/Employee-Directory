import React, {Component} from "react";
import API from "../utils/API"
import DisplayArea from "./DisplayArea";

export default class EmployeeData extends Component {
    state = {
        employees: [{}],
        filteredEmployees: [{}]
    }
    componentDidMount(){
            API.getUsers().then((response) => {
                console.log(response)
                this.setState({
                    employees: response.data.results,
                    filteredEmployees: response.data.results
                })
            })
    }
    render(){
        return (
            <>
         <DisplayArea employees={this.state.filteredEmployees} />    
            </>
        )
        
    }
}
