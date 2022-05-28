import { Component } from "react";
import './TodoForm.css';
export class TodoForm extends Component {
    state = {
        todoItem: {
            id: this.props.list.length + 1,
            title: '',
            description: '',
            completed: false,
            selected: false
        },
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem, completed: false, selected: false};
        console.log(newItem);
        this.props.onTodoAdd(newItem);
        
        
    }

    onTitleChangeHandler = ({target}) => {
        this.setState({todoItem: {...this.state.todoItem, title: target.value}});
    }

    render() {
        return (
            <form className="sidebar-container-footer" onSubmit={this.onFormSubmitHandler}>
                <input className="sidebar-container-footer-input"
                 placeholder="what you need to do?"
                 value={this.state.todoItem.title}
                 onChange={this.onTitleChangeHandler}/>
                <button className="sidebar-container-footer-button">+</button>
             </form>
        );
    }
}