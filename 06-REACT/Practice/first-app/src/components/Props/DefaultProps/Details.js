import React from 'react'
import PropTypes from 'prop-types'

export default function Details({name, eyeColor, age}) {
  return (
    <>
      <div>
       <p>Name : {name} </p>
       <p>EyeColor : {eyeColor}</p>
       <p>Age : {age}</p>
      </div>
    </>
  )
}

Details.PropTypes={
name: PropTypes.string,
eyeColor:PropTypes.string,
age:PropTypes.number
}
