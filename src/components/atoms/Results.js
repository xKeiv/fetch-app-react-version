import React from 'react'
import styled from '@emotion/styled'

//Styling

const Button = styled.button`
background: #495F5D;
border: 2px hidden #FFFFFF;
border-radius: 15px;
width: 60px;
margin: 5px;
padding: 10px;

&:hover {
background: #5B7A77;
border: 2px hidden #FFFFFF;
border-radius: 15px;
width: 60px;
margin: 5px;
padding: 10px;
}
`
const Flex = styled.div`
display: inline-flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: baseline;
align-content: flex-start;`

const Container = styled.div`
  background: #252525;
  border: 2px hidden #FFFFFF;
  color: white;
  border-radius: 10px;
  width: 170px;
  height: 140px;
  text-align: center;
  overflow-wrap: break-word;
  margin: 7px;
  padding: 7px;
  `

//General
const Results = () => {
  return (
    <Flex>
        <Container>Luke<br/>
        <Button>Show</Button>
        </Container>

        <Container>Luke Skywalker<br />
        <Button>Show</Button>
        </Container>

        <Container>User 3<br/>
        <Button>Show</Button>
        </Container>
        
        <Container>User 4<br/>
        <Button>Show</Button>
        </Container>

        <Container>User 4<br/>
        <Button>Show</Button>
        </Container>

        <Container>User 4<br/>
        <Button>Show</Button>
        </Container>

        <Container>User 4<br/>
        <Button>Show</Button>
        </Container>
    </Flex>
  )
}

export default Results