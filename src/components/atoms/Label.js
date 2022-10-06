const Label = ({ label }) => {
  return (
    <div>
    <h1>{label}</h1>
    </div>
  )
}

Label.defaultProps = {
  label: 'Put the text in here',
}

export default Label