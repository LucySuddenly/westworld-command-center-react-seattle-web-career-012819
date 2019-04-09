import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area => {
        return <Area area={area} hosts={props.hosts} key={area.name} selectHost={props.selectHost}/>
      })}
    </Segment>
  )
}

export default WestworldMap
