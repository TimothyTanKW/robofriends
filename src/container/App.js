import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    // like DOM manupilation event
    //to use 'this' according to where its created, rule of thumb use arrow functions
    // to change state use setState in React
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {return response.json()})
    //     .then(users =>{this.setState({robots:users})}
    // );
    // }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
            <h1>Loading</h1> :
            (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>

                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>

            </div>


        // any input change to parse to callback
            );
    }
}

export default App;