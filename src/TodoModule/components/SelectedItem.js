import { Component } from "react";
import './SelectedItem.css';
export class SelectedItem extends Component {
    state = {
        todoItem: {
            id: '',
            title: '',
            description: '',
            completed: false,
            selected: false
        }
    }

    onChangedHandler = (event, target) => {
        this.setState({todoItem: {...this.props.item, description: event.target.value}},
            () => console.log(this.state.todoItem)) 
            event.preventDefault();
    }

    onChangedTitleHandler = (event, target) => {
        this.setState({todoItem: {...this.props.item, title: event.target.value}},
            () => console.log(this.state.todoItem)) 
            event.preventDefault();
    }

    onBlurHandler = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem};
        console.log(newItem);
        this.props.onSelectedItemChange(newItem, newItem.id);
    }


    render() {
        return (
            <>
            <div className={this.props.item.title ? "unselected-sign" : 'unselected-screen'}>Nothing selected</div>
            <form className={this.props.item.title ? "selected-item-container" : 'unselected-sign'} 
                onSubmit={this.onSubmitHandler}>
                <span>
                   <textarea className={this.props.item.title ? 'selected-item-title' : 'unselected-sign'}  
                    value={this.state.todoItem.title ? this.state.todoItem.title : this.props.item.title} 
                    type='text' 
                    onChange={this.onChangedTitleHandler} 
                    onBlur={this.onBlurHandler}>
                    </textarea>
                   <textarea className={this.props.item.title ? 'selected-item-description' : 'unselected-sign'}  
                    onChange={this.onChangedHandler} 
                    onBlur={this.onBlurHandler} 
                    value={this.state.todoItem.description ? this.state.todoItem.description : this.props.item.description} 
                    type='text'>
                    </textarea>
                </span>
            </form>
            </>
        );
    }
}