import React, { Component } from 'react';


class Archives extends Component 
{
    constructor()
    {
        super();
        this.state = {
            name:'Arvhives'
        }
    }

  render() {
    return (
        <h1>{this.state.name}</h1>
    )

}
}
export default Archives;