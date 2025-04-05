import React from 'react'
import GF from './GF'

const GG = (props) => {
    console.log(props)
  return (
    <div>GG
<GF  p={props.property}/>

    </div>
  )
}

export default GG