import styled from '@emotion/styled'

// Styling

const InputStyle = styled.input`
width: 170px;

background: #499167ff;
color: #252525;
border: 1px solid black;
border-radius: 3px;

&::placeholder,
&::-webkit-input-placeholder,
&:-ms-input-placeholder {
  color: #252525;
}
`

// General Input

const Input = ({ placeholder, focusHandler }) => {
  return (
    <div>
        <InputStyle
          type="text"
          placeholder={placeholder}
          onFocus={(e) => {
            focusHandler(true);
        }}
          onBlur={(e) => {
            focusHandler(false);
        }}
           />
    </div>
  )
}

Input.defaultProps = {
  placeholder: 'What are you looking for?',
}

export default Input