import { Component } from "react";
import { TodoListItem } from "./TodoListItem";
import './Sidebar.css'
export class Sidebar extends Component {
    state = {
    list: [
        { id: 1, title: 'Water Plants', description: 'on the kitchen, dining room and the first floor', completed: false, chosen: false },
        { id: 2, title: 'Pack the bags', description: 'preparation for trip to London', completed: false, chosen: false },
        { id: 3, title: 'Charge laptop', description: 'preparation for trip to London', completed: false, chosen: false },
        { id: 4, title: 'Post homework to Hillel Course', description: 'React Group from 30.04.2022(every Saturday)', completed: false, chosen: false },
        { id: 5, title: 'Make backup of HDD', description: 'Use TimeMachine for that', completed: false, chosen: false },
    ],
    chosenItem: null
  
};


onItemDeleteHandler = (id) => {
    this.setState({
        list: this.state.list.filter((todoItem) => todoItem.id !==id),
    });
}

onItemCompleteHandler = (id) => {
    const item = this.state.list.find((todoItem) => todoItem.id === id);
    const updatedItem = {...item, completed: !item.completed};
    this.setState({
        list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
    }, () => {
        console.log(this.state.list);
    })
}

onItemChooseHandler = (id) => {
   const chosenItem = this.state.list.find((todoItem) => todoItem.id === id);
   const chosenIteme = {...item, chosen: true};
   this.setState({
    list: this.state.list.map((todoItem) => todoItem.id === id ? chosenIteme : todoItem)
   }, () => {
    console.log(this.state.list);
       console.log('gggg');
   } )
   return this.newArray.push(chosenItem);
}

newArray = [];
  
    render() {
        return (
            <div className="sidebar-container">
                <h1 className="sidebar-container-header">Todos</h1>
                <form>
                    <input placeholder="Search" className="sidebar-container-search"></input>
                </form>
                <div>
                   {this.state.list.map((todoItem) => <TodoListItem 
                   key={todoItem.id}
                   item={todoItem} 
                   onItemDelete={this.onItemDeleteHandler}
                   onItemComplete={this.onItemCompleteHandler}
                   onItemChoose = {this.onItemChooseHandler}
                  
                  
                   
                   />) } 
                  
                </div>
                <div className="sidebar-container-footer">
                    <input className="sidebar-container-footer-input" placeholder="what you need to do?"></input>
                    <button className="sidebar-container-footer-button">+</button>
                </div>
           </div>
        );
    }
}
