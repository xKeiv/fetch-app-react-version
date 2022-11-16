import React, { useState } from 'react'
import styled from "@emotion/styled"

const Button = ( buttonContent ) => {


const Button = styled.button`
background: #468F88;
border: 2px hidden #FFFFFF;
border-radius: 10%;
color: inherit;

width: 100px;
margin: 5px;
padding: 5px;

&:hover {
background: #336B66;
color: inherit;
border: 2px hidden #FFFFFF;
border-radius: 10%;
width: 100px;
margin: 5px;
padding: 5px;
`

const [content, setContent] = useState(buttonContent)

  return (
   <Button
   onClick={(e) => {
   }
}>
Learn more
</Button>
  )
}

export default Button