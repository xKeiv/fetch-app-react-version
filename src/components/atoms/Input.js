const Input = ({ placeholder }) => {
  return (
    <div>
        <input
          type="text" placeholder={placeholder} />
    </div>
  )
}

Input.defaultProps = {
  placeholder: 'What are you looking for, young jedi?',
}

export default Input