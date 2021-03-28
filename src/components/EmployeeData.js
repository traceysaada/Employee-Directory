import React, {Component} from "react";
import API from "../utils/API"
import DisplayArea from "./DisplayArea";
import SearchBar from "./SearchBar"

export default class EmployeeData extends Component {
    state = {
        employees: [{}],
        filteredEmployees: [{}]
    }
    handleSearch = e => {
        const filteredEmployeesList = this.state.employees.filter(employee => {
            let name = `${employee.name.title}${employee.name.first}${employee.name.last}`
            return name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({filteredEmployees: filteredEmployeesList})
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
            <SearchBar handleSearch = { this.handleSearch}/>
         <DisplayArea employees={this.state.filteredEmployees} />    
            </>
        )
        
    }
}
