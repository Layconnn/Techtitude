import React from 'react'

function Input(props) {
  return (
    <>
        <input placeholder={props.placeholder} type={props.type} required name={props.name} className={props.className} />
    </>
  )
}

export default Input
