import React from 'react';
import styled from '@emotion/styled';

//Styling

const PromptDiv = styled.div`
background: #2B2B2B;
font-size: 13px;
width: 171px;

color: #FFFFFF;
border: solid #1F1F1F 1px;

position: absolute;
top: 130px;
z-index: 0;
`

const PromptDgn = styled.span`
background: #1F1F1F;
font-size: 13px;
width: 171px;

color: #FFFFFF;
border: solid #1B1C1E 1px;
marginBottom: 2px;
padding: 2px;

position: absolute;
top: 0px;
left: 0px;
zIndex: -1;
`

//General
const Prompt = ({ isVisible }) => {
  return (
    <>
    <div style={{display: isVisible ? 'block' : 'none'}}>
        <PromptDiv>
          <PromptDgn>
              <span>User 1</span><br/>
              <span>User 2</span><br/>
              <span>User 3</span><br/>
              <span>User 4</span><br/>
          </PromptDgn>
        </PromptDiv>
    </div>
    </>
  )
}

export default Prompt

// const promptStyle = {
//   backgroundColor: '#2B2B2B',
//   fontSize: '13px',
//   width: '171px',

//   color: '#FFFFFF',
//   border: 'solid #1F1F1F 1px',
//   marginBottom: '2px',
//   padding: '2px',

//   position: 'absolute',
//   top: '20px',
//   zIndex: '-1',
// }

// const promptStyle2 = {
//     backgroundColor: '#1F1F1F',
//     fontSize: '13px',
//     width: '171px',

//     color: '#FFFFFF',
//     border: 'solid #1B1C1E 1px',
//     marginBottom: '2px',
//     padding: '2px',

//     position: 'absolute',
//     top: '0px',
//     left: '0px',
//     zIndex: "-1"
// }

