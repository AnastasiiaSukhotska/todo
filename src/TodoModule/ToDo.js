import { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import '../App.css';
export class ToDo extends Component {
    render () {
        return (
            <div className='wrapper'>
                <Sidebar/>
            </div>
        )
    }
}