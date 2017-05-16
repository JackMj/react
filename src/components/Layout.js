import React, { Component } from 'react';


class Layout extends Component 
{
    constructor()
    {
        super();
        this.state = {
            name:'imuzi'
        }
    }

  render() {
    return (
        <h1>{this.state.name}</h1>
    )

}
}
export default Layout;