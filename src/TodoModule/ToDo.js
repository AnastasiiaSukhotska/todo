import { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChosenContainer } from './components/ChosenContainer';
import '../App.css';
export class ToDo extends Component {
    render () {
        return (
            <div className='wrapper'>
                <Sidebar/>
                <ChosenContainer/>
            </div>
        )
    }
}