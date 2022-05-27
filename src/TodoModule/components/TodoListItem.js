import { Component } from "react";
import './TodoListItem.css';
export class TodoListItem extends Component {

    render() {
        return (
            <div onClick={() => this.props.onItemChoose(this.props.item.id)} className={this.props.item.selected ? 'list-item-container-selected' : 'list-item-container'}>
                <span onClick={(event) => this.props.onItemComplete(this.props.item.id, event)} className={this.props.item.completed ? 'completed-sign' : 'uncompleted-sign'}/>
                <span> 
                    <div className={this.props.item.completed ? 'completed' : 'default'}>{this.props.item.title}</div>
                    <div className="task-description">{this.props.item.description}</div>
                </span>
                <button onClick={(event) => this.props.onItemDelete(this.props.item.id, event)}>X</button>
            </div>
        ); 
    }
}