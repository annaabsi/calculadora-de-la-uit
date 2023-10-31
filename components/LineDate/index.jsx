import React from 'react'

import Input from '../Input'
import styled from 'styled-components'

const LineDate = ({ 
  title,
  type,
  placeholder,
  name,
  value,
  ...props }) => {
  return (
    <Content>
      <Title>{ title }</Title>
      <Input
        Types={type}
        Placeholder={placeholder}
        name={name}
        maxLength={10}
        Value={value}
        {...props}
      />
    </Content>
  )
}

export default LineDate

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 0 40px;
  margin: 5px 0;

  @media (max-width: 560px){
    padding: 0;
  }
`
const Title = styled.h1`
  font-size: 17px;
  text-align: left;
  font-weight: 100;
  
  @media (max-width: 560px){
    font-size: 15px;
    line-height: 18px;
  }
`
