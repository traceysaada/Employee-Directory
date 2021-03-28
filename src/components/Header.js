import React, {Component} from 'react'; 
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Employee Management System</h1>
                <h3>Use search box to filter employees</h3>
            </div>
        )
    }
}