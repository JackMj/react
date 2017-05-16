import React, { Component } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component
 {
   constructor(props)
   {
     super()
   }
  render() 
  {
    return (
      <div>
          <Layout/>
           <Header/>
            <Footer/>
      </div>
    );
  }
}

export default App;
