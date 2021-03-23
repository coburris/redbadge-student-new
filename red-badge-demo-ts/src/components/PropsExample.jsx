import React, { Component } from 'react';

class PropsExample extends Component {

    render(){
        // let name = this.props.name;
        // let business = this.props.business;
        const {name, business} = this.props
        return <div>{name} is the founder of {business}</div>;
    }
}

export default PropsExample;