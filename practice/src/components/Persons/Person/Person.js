import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from "../../../containers/App"
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor();', props);
        this.inputElement = React.createRef();
    }
    componentWillMount() {
        console.log('[Person.js] inside componentWillMount();');
    }
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount();');
        if (this.props.position == 0) {
            this.inputElement.current.focus();
        }
    }
    componentWillUnmount() {
        console.log('[Person.js] inside componentWillUnMount();');
    }
    focus() {
        this.inputElement.current.focus();
    }
    render() {
        console.log('[Person.js] inside render();');
        console.log(this.props.name);
        
        return <Auxiliary>
            <AuthContext.Consumer>
                {auth => auth? <p> I'm authenticated </p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old
            </p>
            <p>{this.props.children}</p>
            <input 
                ref= {this.inputElement}
                value={this.props.name} 
                type="text" 
                onChange={this.props.nameChanged}/>
        </Auxiliary>
        // return [
        //   <p key="1" onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old </p>,
        //   <p key="2">{this.props.children}</p>,
        //   <input key="3" value={this.props.name} type="text" onChange={this.props.nameChanged}/>
        // ]
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChanged: PropTypes.func,
}
export default withClass(Person,classes.Person);
// export default Person;