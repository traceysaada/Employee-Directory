import React, { Component } from "react";
import API from "../utils/API";
import DisplayArea from "./DisplayArea";
import SearchBar from "./SearchBar";

export default class EmployeeData extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [{}],
    order: "descend",
  };

  handleSort = (tableLabel) => {
    console.log(tableLabel);
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compareEmployees = (a, b) => {
       

            if (this.state.order === "ascend") {
                return a[tableLabel].first.localeCompare(b[tableLabel].first);
            } else {
                return b[tableLabel].first.localeCompare(a[tableLabel].first);
            }
        
        
        };

    const sortedEmployees = this.state.filteredEmployees.sort(compareEmployees);
    this.setState({ filteredEmployees: sortedEmployees });
  };

  handleSearch = (e) => {
    const filteredEmployeesList = this.state.employees.filter((employee) => {
      let name = `${employee.name.title}${employee.name.first}${employee.name.last}`;
      return name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredEmployeesList });
  };

  componentDidMount() {
    API.getUsers().then((response) => {
      console.log(response);
      this.setState({
        employees: response.data.results,
        filteredEmployees: response.data.results,
      });
    });
  }
  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
        <DisplayArea
          employees={this.state.filteredEmployees}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}
