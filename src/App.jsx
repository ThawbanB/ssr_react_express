import React from "react"; 

function App() {
  const [times, setTimes] = React.useState(0);

  return (
    <div>
      {}
      <h1>Hello {times}</h1>
      {}
      <button onClick={() => setTimes((times) => times + 1)}>Ajouter</button>
    </div>
  )
}

export default App
