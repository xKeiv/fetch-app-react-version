// import Input from "./components/atoms/Input.js"
// import Label from "./components/atoms/Label.js"
import InputForm from '../organisms/InputForm.js'
import styled from '@emotion/styled';

//styling

const Background = styled.div`
background: #7A9B76;
height: 2100px;
`

//general

const Main = () => {
  const data = {
    placeholder: "What are you looking for?",
    label: "Fetch App - SWApi",
  }
  
  return (
    <Background>
    <div>
      <InputForm data={data} />
    </div>
    </Background>
  );
}

export default Main;
