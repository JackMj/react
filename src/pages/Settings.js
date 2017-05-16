import React, { Component } from 'react';


class Settings extends Component 
{
    constructor()
    {
        super();
        this.state = {
            name:'settings'
        }
    }

  render() {
    return (
        <h1>{this.state.name}</h1>
    )

}
}
export default Settings;