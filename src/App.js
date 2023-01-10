import React, {Component, Fragment} from "react";
import {robots} from "./robots";
import RobotCardList from "./robotCardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        /*
                In order to change state object, I need to use setState method.
                We need to use an object to change this state like below
                Now searchField that comes from state is changed every time
                onSearchChange() is called.
        */
        this.setState({searchField: event.target.value});
        /*Using 'this' to access state object cannot be done here onSearchChange() method
        * because 'this' not referring the App; It referring the input
        * The scope of 'this' is in the input. And input doesn't have state object.
        * I need to use a special syntax in order to access the state object from App*/
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <Fragment>
                <img
                    src={process.env.PUBLIC_URL + "/Mr_Robot_Logo.svg"}
                    alt="Mr robot logo"
                    id='mrRobotLogo'
                />
                <SearchBox searchChange={this.onSearchChange}/>
                <div className='tc'>
                    <Scroll>
                        <RobotCardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            </Fragment>
        );
    }
}

export default App;