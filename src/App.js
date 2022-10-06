// import Input from "./components/atoms/Input.js"
// import Label from "./components/atoms/Label.js"
import InputForm from './components/molecules/InputForm.js'

const App = () => {
  const data = {
    placeholder: "Hi, it's me",
    label: "Do you see mee",
  }
  
  return (
    <div className="container">
      <InputForm data={data} />
    </div>
  );
}

export default App;
