import { Component } from "react";
import { TodoListItem } from "./TodoListItem";
import './Sidebar.css'
import {SelectedItem} from "./SelectedItem";
import { TodoForm } from "./TodoForm";
export class Sidebar extends Component {
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
       console.log('gggg');
   })
}
  
    render() {
        return (
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
                    <TodoForm/>
                </div>
                <div>
                        <SelectedItem item = {this.state.chosenItem}/>
                </div>
            </div>
        );
    }
}
