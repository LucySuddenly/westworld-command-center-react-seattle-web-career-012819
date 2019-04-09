import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        return <Host selectHost={props.selectHost} host={host} key={host.name}/>
      })}
    </Card.Group>
  )
}

export default HostList
