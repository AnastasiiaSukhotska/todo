import { Component } from "react";
import './SelectedItem.css';
export class SelectedItem extends Component {



    render() {
        return (
            <div className="selected-item-container">
                <span>
                   <div className={this.props.item.title ? 'selected-item-title' : 'unselected-sign'}>{this.props.item.title ? this.props.item.title : "Nothing Selected"}</div>
                   <div className={this.props.item.description ? 'selected-item-description' : 'unselected-sign'}>{this.props.item.description ? this.props.item.description : ""}</div>
                </span>
            </div>
        );
    }
}