import React, { Component } from 'react';
import Layout from './Layout'
 
class Header extends Component {
  constructor(props)
  {
      super()
  }
  render() 
  {
    return (
        <div>
          <Layout>{this.props.name}</Layout>
        </div>
    )

}
}
export default Header;