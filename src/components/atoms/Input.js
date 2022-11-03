import styled from '@emotion/styled'

// Styling

const InputStyle = styled.input`
width: 170px;

background: #499167ff;
color: green;
border: 1px solid black;
border-radius: 3px;

&::placeholder,
&::-webkit-input-placeholder,
&:-ms-input-placeholder {
  color: #252525;
}
`

// General Input

const Input = ({ placeholder }) => {
  return (
    <div>
        <InputStyle
          type="text"
          placeholder={placeholder}
           />
    </div>
  )
}

Input.defaultProps = {
  placeholder: 'What are you looking for, young jedi?',
}

export default Input