import React from 'react'
import Parent from './Parent'

const GF = (props) => {
    console.log(props)
  return (
    <div>GF

        <Parent  p={props.p}/>
    </div>
  )
}

export default GF
