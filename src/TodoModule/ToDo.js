import { Component } from "react";
import { TodoListItem } from "./components/TodoListItem";
import '../ToDo.css'
import {SelectedItem} from "./components/SelectedItem";
import { TodoForm } from "./components/TodoForm";
import '../App.css';
export class ToDo extends Component {
    state = {
    list: [
        { id: 1, title: 'Water Plants', description: 'on the kitchen, dining room and the first floor', completed: false, selected: false},
        { id: 2, title: 'Pack the bags', description: 'preparation for trip to London', completed: false, selected: false},
        { id: 3, title: 'Charge laptop', description: 'preparation for trip to London', completed: false, selected: false},
        { id: 4, title: 'Post homework to Hillel Course', description: 'React Group from 30.04.2022(every Saturday)', completed: false, selected: false},
        { id: 5, title: 'Make backup of HDD', description: 'Use TimeMachine for that', completed: false, selected: false},
    ],
    chosenItem: {}
  
};


onItemDeleteHandler = (id, e) => {
    this.setState({
        list: this.state.list.filter((todoItem) => todoItem.id !== id),
    });
    e.stopPropagation();
}

onItemCompleteHandler = (id, e) => {
   
    const item = this.state.list.find((todoItem) => todoItem.id === id);
    const updatedItem = {...item, completed: !item.completed};
    this.setState({
        list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
    }, () => {
        console.log(this.state.list);
    })
    e.stopPropagation();
}

onItemChooseHandler = (id, e) => {
    
   const chosenItem = this.state.list.find((todoItem) => todoItem.id === id);
   const updatedItem = {...chosenItem, selected: !chosenItem.selected};
   this.setState({
       list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
       chosenItem: chosenItem,
   }, () => {
       console.log(this.state.chosenItem);
       
   })
}
onTodoAddHandler = (newItem) => {
    console.log(newItem)
    this.setState({
        list: [...this.state.list, newItem],
    }, () => {
        console.log (this.state.list);
    });
    
}

onSelectedItemChangeHandler = (newItem, id) => {
    const item = this.state.list.find((newItem) => newItem.id === id);
    const updatedItem = {...item, title: newItem.title, description: newItem.description, id: newItem.id};
    this.setState({
        list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
    }, () => {
        console.log(this.state.list);
    })
}
  
    render() {
        return (
            <div className="wrapper">
             <div className="sidebar-root">
                <div className="sidebar-container">
                    <h1 className="sidebar-container-header">Todos</h1>
                    <form className="sidebar-container-input">
                        <input placeholder="Search" className="sidebar-container-search"/>
                    </form>
                    <div>
                        {this.state.list.map((todoItem) =>
                            <TodoListItem
                                key={todoItem.id}
                                item={todoItem}
                                onItemDelete={this.onItemDeleteHandler}
                                onItemComplete={this.onItemCompleteHandler}                        
                                onItemChoose = {this.onItemChooseHandler}                           
                            />)
                        }
                    </div>
                    <TodoForm
                    list = {this.state.list}
                    onTodoAdd={this.onTodoAddHandler}/>
                </div>
                <div>
                        <SelectedItem 
                        item = {this.state.chosenItem}
                        onSelectedItemChange = {this.onSelectedItemChangeHandler}/>
                </div>
             </div>
            </div>
        );
    }
}
