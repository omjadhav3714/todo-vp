import React from "react";
import CustomForm from "./components/Form";
import NavBar from "./components/NavBar";

let initialState = {
  title: '',
  description: ''
}

function App() {
  const [data, setData] = React.useState(initialState);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="container">
      <NavBar />
      <CustomForm handleChange={handleChange} values={data} />
    </div>
  );
}

export default App;


