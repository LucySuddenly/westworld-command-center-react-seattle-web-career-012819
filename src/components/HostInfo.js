import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
    options: this.props.areas.map(area => {
      return {key: area.name, text: area.name, value: area.id}
    })
  }
}



  handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }



  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName}  {" "} {this.props.host.lastName === "n/a" ? "" : this.props.host.lastName } | { this.props.host.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
                </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={() => this.props.toggleActive(this.props.host)}
                  label={this.props.host.active ? "Active" : "Decommissioned"}
                  checked={this.props.host.active}
                  slider
                />
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={(ev) => {this.props.changeLocation(this.props.host, ev)}}
                value={this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
