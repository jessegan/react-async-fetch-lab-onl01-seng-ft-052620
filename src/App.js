import React, { Component } from 'react'

export class App extends Component {
  
  state = {
    people: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp=>resp.json())
      .then(data=> {
        this.setState({
          people: data.people
        })
      })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
