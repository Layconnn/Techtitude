import React from 'react'

function Input(props) {
  return (
    <>
        <input placeholder={props.placeholder} type={props.type} className={props.className} />
    </>
  )
}

export default Input
