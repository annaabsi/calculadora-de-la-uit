import React from 'react'

import styled from 'styled-components'

const FamComboBox = ({ title, options, placeholder, onChange }) => {
  return (
    <Content>
      <Title>{title}</Title>
      <Select
        onChange={onChange}
      >
      {
        [{id: 0, description: placeholder}, ...options].map((obj, i) => 
          <Options
            hidden={ i === 0 }
            key={i}
            value={obj.id}
          >
            {obj.description}
          </Options>
        )
      }
      </Select>
    </Content>
  )
}

export default FamComboBox

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
const Select = styled.select`
  min-height: 35px;
  width: 40%;
  border-radius: 5px;
  border: 2px solid #779D9F;
  font-size: 16px;
  font-style: normal;
  text-align: end;
  padding: 3px 12px;
  min-width: 175px;
`
const Options = styled.option`
  
`