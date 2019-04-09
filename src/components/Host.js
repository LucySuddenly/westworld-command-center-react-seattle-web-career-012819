import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    <Card
      className={props.host.selected ? "host selected" : "host"}
      image={props.host.imageUrl}
      raised
      onClick={() => props.selectHost(props.host)}
    />
  )
}

export default Host
