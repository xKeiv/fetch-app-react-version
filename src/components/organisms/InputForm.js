import Input from "../atoms/Input.js";
import Label from "../atoms/Label.js";
import Prompt from "../molecules/Prompt.js";
import Results from "../atoms/Results.js";
import { useState } from 'react'

import styled from '@emotion/styled'

// Styling
const HeadingStyle = styled.div`
background-color: #282B28;
border: hidden 1px;
border-radius: 0px 0px 10px 10px;
padding: 20px 20px 20px 20px;
margin: 0px 50px 50px 50px;
height: auto;
width: auto;

box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, .50);
`

// let isVisible = false;

// const changeVisible = (newValue) => {
//   isVisible = newValue
// }


// InputForm

const InputForm = ({ data }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
        <HeadingStyle>
        <Label label={data.label} />
        <Input
        placeholder={data.placeholder}
        focusHandler={setVisible}
          />
        <Prompt
        isVisible={visible}
        />
        <h3>Results</h3>
        <Results />
        </HeadingStyle>
    </div>
  )
}

export default InputForm