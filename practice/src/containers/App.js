import React, {PureComponent} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from "../components/Persons/Persons";
import Auxiliary from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor();', props);
        this.state = {
            persons: [
                {
                    id: 'b3h5b4j1',
                    name: "Ashish",
                    age: 23
                }, {
                    id: 'b3h5b4j2',
                    name: "Mubashir",
                    age: 22
                }, {
                    id: 'b3h5b4j3',
                    name: "Rahim",
                    age: 23
                }
            ],
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        }
    }
    componentWillMount() {
        console.log('[App.js] inside componentWillMount();');
    }
    componentDidMount() {
        console.log('[App.js] inside componentDidMount();');
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate');
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPersons !== this.state.showPersons ;
    // }
    componentWillUpdate() {
        console.log('[UPDATE App.js] Inside componentWillUpdate(); ');
    }
    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate();');
    }
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: "Ashish",
                    age: "23"
                }, {
                    name: newName,
                    age: "22"
                }, {
                    name: "Rahim",
                    age: "23"
                }
            ]
        })
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this
            .state
            .persons
            .findIndex((person) => id === person.id);
        const person = Object.create(this.state.persons[personIndex]);
        const persons = [...this.state.persons];
        person.name = event.target.value;
        persons[personIndex] = person;

        this.setState({persons: persons})
    }
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        })
    }
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
    loginHandler = () => {
        this.setState({ authenticated: true })
    }
    render() {
        console.log('[App.js] inside render();');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }
        return ( 
            <Auxiliary>
                
              <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
                  <Cockpit
                      appTitle={this.props.title}
                      persons={this.state.persons}
                      showPersons={this.state.showPersons}
                      click={this.togglePersonsHandler}
                      login={this.loginHandler}/> 
                      <AuthContext.Provider value={this.state.authenticated}>
                        {persons}
                      </AuthContext.Provider>
            </Auxiliary>
        );
    }
}

export default withClass(App, classes.App);
