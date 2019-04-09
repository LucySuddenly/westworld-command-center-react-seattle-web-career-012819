import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {
  constructor(){
    super()
    this.state = {
      hosts: [],
      areas: []
    }
    fetch("//localhost:4000/hosts").then(resp => resp.json()).then( hosts =>
      this.setState({
        hosts: hosts.map(host => ({...host, selected: false}))
      }))
    fetch("//localhost:4000/areas").then(resp => resp.json()).then( areas =>
      this.setState({
        areas
      }))
    }

    selectHost = (host) => {
      this.setState((prevState)=>({
        hosts: prevState.hosts.map(newHost => {
          if (newHost.id === host.id){
            return {...newHost, selected: true}
          } else {
            return {...newHost, selected: false}
          }
        })
      }))
    }

    toggleActive = (host) => {
      this.setState((prevState)=>({
        hosts: prevState.hosts.map(newHost => {
          if (newHost.id === host.id){
            return {...newHost, active: !host.active}
          } else {
            return newHost
          }
        })
      }))
    }

    changeLocation = (host, ev) => {
      ev.persist()
      this.setState((prevState)=>({
        hosts: prevState.hosts.map(newHost => {
          if (newHost.id === host.id){
            return {...newHost, area: ev.target.innerText}
          } else {
            return newHost
          }
        })
      }))
    }


  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} selectHost={this.selectHost}/>
        <Headquarters changeLocation={this.changeLocation} toggleActive={this.toggleActive} areas={this.state.areas} hosts={this.state.hosts} selectHost={this.selectHost} />
      </Segment>
    )
  }
}

export default App;
