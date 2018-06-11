// class_component.js
import React from 'react';
import './styles.css';

// lifecycle methods
// more complex logic
// contain other components

class PackComponent extends React.Component {
    constructor(props){
        super(props);
    }   

    render() {
        return (
            <div key={this.props.pack.id} className="pack">
                <h2>{this.props.pack.packageName}</h2>
                <div>Location: {this.props.pack.location}</div>
                <br/>
                <div>Price: ${this.props.pack.price}</div>
            </div>
        );
    }
}

export default PackComponent;