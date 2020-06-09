import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavagationBar extends Component{
    render(){
        return(
            <nav className = "navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className = "navbar-brand">Chess Engine</Link>
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "navbar-item">
                            <Link to = "/" className = "nav-link">Play</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/history" className = "nav-link">View Game History</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/setup" className = "nav-link">Setup Analysis Board</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}