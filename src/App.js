import React, { Component } from 'react'
import Banner from './files/banner.jpg'
import Welcome from './components/welcome/Welcome'


class App extends Component {

  render() {
    const style = {
      root:{height:'100%',background:`url(${Banner}) no-repeat center bottom`,backgroundSize:'2000px'}
  }

    return (
      <div style={style.root}>
        <Welcome/>
      </div>
    );
  }
}

export default App;
