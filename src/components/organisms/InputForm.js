import Input from "../atoms/Input.js";
import Label from "../atoms/Label.js";
import Prompt from "../molecules/Prompt.js";
import Results from "../atoms/Results.js";

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

// InputForm

const InputForm = ({ data }) => {
  return (
    <div>
        <HeadingStyle>
        <Label label={data.label} />
        <Input placeholder={data.placeholder} />
        <Prompt />
        <h3>Results</h3>
        <Results />
        </HeadingStyle>
    </div>
  )
}


// const headingStyle = {
// backgroundColor: '#303030',
// border: 'solid black 1px',
// borderRadius: '20px',
// padding: '10px',
// margin: '10px',
// }
export default InputForm