import { Component } from "react";
import './TodoForm.css';
export class TodoForm extends Component {

    render() {
        return (
            <div className="sidebar-container-footer">
                <input className="sidebar-container-footer-input" placeholder="what you need to do?"/>
                <button className="sidebar-container-footer-button">+</button>
             </div>
        );
    }
}