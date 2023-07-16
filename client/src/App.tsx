import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])
  
  return <h1>Hola mundo</h1>;
}

export default App;
