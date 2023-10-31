import React from 'react'

import styled from 'styled-components'

const Input = ({ 
  Types, 
  Name, 
  Disabled = false, 
  Placeholder, 
  Value,
  handleInput,
  ...props }) => {
  return (
    <>
      <InputComponent 
        type={Types}
        name={Name}
        disabled={Disabled}
        placeholder={Placeholder}
        value={Value}
        {...props}
      />
    </>
  )
}
export default Input

const InputComponent = styled.input`
  text-align: end;
  width: 40%;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  padding: 3px 15px;
  border: 2px solid #759C9F;
  min-height: 35px;
  min-width: 175px;
  background-color: white;
`