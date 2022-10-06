import Input from "../atoms/Input.js";
import Label from "../atoms/Label.js";
import Prompt from "../atoms/Prompt.js";
import Results from "../atoms/Results.js";

const InputForm = ({ data }) => {
  return (
    <div style={headingStyle}>
        <Label label={data.label} />
        <Input placeholder={data.placeholder} />
        <Prompt />
        <Results />
    </div>
  )
}


const headingStyle = {
backgroundColor: '#303030',
text: 'blue',
border: 'solid black 1px',
borderRadius: '20px',
padding: '10px',
margin: '10px',
}
export default InputForm