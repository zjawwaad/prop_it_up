import React, { Component } from 'react';
    
    
export class PersonCard extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h5>Age: {this.props.age}</h5>
                <h5>Hair Color: {this.props.hairColor}</h5>
            </div>
        )
    }
}
    
export default PersonCard;