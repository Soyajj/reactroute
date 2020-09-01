import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class MainPage extends Component {
    render() {
        return (
            <div>
                <Link to='/' exact={true}>Home</Link>
                <h1>Projects</h1>
                    <Link to="/calculator">
                        <li>Calculator</li>
                    </Link>
                    <Link to="/todo">
                        <li>Todo List</li>
                    </Link>
            </div>
        )
    }
}

export default MainPage
