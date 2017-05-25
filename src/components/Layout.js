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
        <div>
        <h1>{this.state.name}</h1>
         <h1>testing routes</h1>
        </div>
    )

}
}
export default Layout;