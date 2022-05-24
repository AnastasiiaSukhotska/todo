import { Component } from "react";
import './TodoListItem.css';
export class TodoListItem extends Component {



    render() {
        return (
            <div onClick={() => this.props.onItemChoose(this.props.item.id)} className={"list-item-container"}>
                <span>{this.props.chosenItem}</span>
                <span onClick={() => this.props.onItemComplete(this.props.item.id)} className={this.props.item.completed ? 'completed-sign' : 'uncompleted-sign'}></span>
               <span> 
                   <div className={this.props.item.completed ? 'completed' : 'default'}>{this.props.item.title}</div>
                   <div className="task-description">{this.props.item.description}</div>
                </span>
                <button onClick={() => this.props.onItemDelete(this.props.item.id)}>X</button>
            </div>
        ); 
    }
}