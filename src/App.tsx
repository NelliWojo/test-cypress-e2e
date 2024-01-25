import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setVisible(true)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Show</button>
      {visible && <p>{value}</p>}
    </div>
  );
}

export default App;
